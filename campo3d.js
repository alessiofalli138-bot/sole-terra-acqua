// Campo 3D in apertura.
// La foto vera del campo riceve una profondita': cielo e ulivi lontani, filari che si
// avvicinano verso il basso. Scorrendo si "entra" nel campo (le cose vicine si
// ingrandiscono di piu'), col mouse o inclinando il telefono cambia la prospettiva.
// Qualche granello di polline a profondita' diverse rende visibile lo spazio.
// Se il WebGL non c'e', non succede niente: resta la foto normale.

const VERTICE_FOTO = `
attribute vec2 aPos;
varying vec2 vUv;
void main() {
  vUv = vec2(aPos.x * 0.5 + 0.5, 0.5 - aPos.y * 0.5);
  gl_Position = vec4(aPos, 0.0, 1.0);
}`;

const FRAMMENTO_FOTO = `
precision mediump float;
uniform sampler2D uFoto;
uniform vec2 uScala;
uniform vec2 uSpost;
uniform vec2 uPunto;
uniform float uAvanti;
uniform float uOrizzonte;
varying vec2 vUv;
float vicinanza(float y) {
  float s = clamp((y - uOrizzonte) / (1.0 - uOrizzonte), 0.0, 1.0);
  return s * s * 0.7 + s * 0.3;
}
void main() {
  vec2 uv = vUv * uScala + uSpost;
  float n = vicinanza(uv.y);
  vec2 fuga = vec2(0.5, uOrizzonte);
  uv = fuga + (uv - fuga) / (1.0 + uAvanti * (0.08 + 0.62 * n));
  uv += uPunto * vec2(0.052, 0.026) * (n - 0.15);
  gl_FragColor = texture2D(uFoto, clamp(uv, vec2(0.002), vec2(0.998)));
}`;

const VERTICE_POLLINE = `
attribute vec3 aSeme;
uniform float uTempo;
uniform vec2 uPunto;
uniform float uAvanti;
uniform float uOrizzonte;
uniform float uDpr;
varying float vAlfa;
void main() {
  float z = aSeme.z;
  vec2 p = aSeme.xy;
  p.y = fract(p.y - uTempo * (0.004 + 0.016 * z));
  p.x += sin(uTempo * 0.45 + z * 23.0) * 0.012;
  p += uPunto * vec2(0.052, 0.026) * (z - 0.15) * 1.6;
  vec2 fuga = vec2(0.5, uOrizzonte);
  p = fuga + (p - fuga) * (1.0 + uAvanti * (0.1 + 0.7 * z));
  gl_Position = vec4(p.x * 2.0 - 1.0, 1.0 - p.y * 2.0, 0.0, 1.0);
  gl_PointSize = (2.5 + z * 9.0) * uDpr * (1.0 + uAvanti * z);
  vAlfa = 0.22 + 0.5 * z;
}`;

const FRAMMENTO_POLLINE = `
precision mediump float;
varying float vAlfa;
void main() {
  float d = length(gl_PointCoord - 0.5);
  gl_FragColor = vec4(1.0, 0.9, 0.62, smoothstep(0.5, 0.05, d) * vAlfa);
}`;

function programma(gl, sorgenteV, sorgenteF) {
  const crea = (tipo, testo) => {
    const s = gl.createShader(tipo);
    gl.shaderSource(s, testo);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
    return s;
  };
  const p = gl.createProgram();
  gl.attachShader(p, crea(gl.VERTEX_SHADER, sorgenteV));
  gl.attachShader(p, crea(gl.FRAGMENT_SHADER, sorgenteF));
  gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p));
  return p;
}

export function avviaCampo3D(hero) {
  const foto = hero.querySelector("picture img") || hero.querySelector("img");
  if (!foto || hero.querySelector(".campo-3d")) return null;

  const tela = document.createElement("canvas");
  tela.className = "campo-3d";
  tela.setAttribute("aria-hidden", "true");
  const gl = tela.getContext("webgl", { alpha: false, antialias: false, depth: false, powerPreference: "low-power" });
  if (!gl) return null;

  let pFoto, pPolline;
  try {
    pFoto = programma(gl, VERTICE_FOTO, FRAMMENTO_FOTO);
    pPolline = programma(gl, VERTICE_POLLINE, FRAMMENTO_POLLINE);
  } catch (_) {
    return null;
  }
  (foto.closest("picture") || foto).after(tela);

  // triangolo che copre tutto lo schermo
  const bufTriangolo = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, bufTriangolo);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);

  // granelli di polline: x, y, profondita'
  const N_POLLINE = 70;
  const semi = new Float32Array(N_POLLINE * 3);
  for (let i = 0; i < N_POLLINE; i++) {
    semi[i * 3] = Math.random();
    semi[i * 3 + 1] = Math.random();
    semi[i * 3 + 2] = Math.pow(Math.random(), 1.6);   // piu' granelli lontani che vicini
  }
  const bufPolline = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, bufPolline);
  gl.bufferData(gl.ARRAY_BUFFER, semi, gl.STATIC_DRAW);

  const u = (p, nome) => gl.getUniformLocation(p, nome);
  const U = {
    foto: u(pFoto, "uFoto"), scala: u(pFoto, "uScala"), spost: u(pFoto, "uSpost"),
    punto: u(pFoto, "uPunto"), avanti: u(pFoto, "uAvanti"), orizzonte: u(pFoto, "uOrizzonte"),
    pTempo: u(pPolline, "uTempo"), pPunto: u(pPolline, "uPunto"), pAvanti: u(pPolline, "uAvanti"),
    pOrizzonte: u(pPolline, "uOrizzonte"), pDpr: u(pPolline, "uDpr")
  };
  const aPos = gl.getAttribLocation(pFoto, "aPos");
  const aSeme = gl.getAttribLocation(pPolline, "aSeme");

  const texture = gl.createTexture();
  let sorgente = "", orizzonte = 0.34, larghezzaFoto = 1, altezzaFoto = 1, pronta = false;
  const caricaFoto = () => {
    if (!foto.complete || !foto.naturalWidth) return;
    if (foto.currentSrc === sorgente) return;
    sorgente = foto.currentSrc;
    orizzonte = /mobile/.test(sorgente) ? 0.29 : 0.34;   // dove iniziano i campi in ciascuna foto
    larghezzaFoto = foto.naturalWidth;
    altezzaFoto = foto.naturalHeight;
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, foto);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    pronta = true;
  };

  let dpr = 1;
  const misura = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const w = Math.max(1, Math.round(hero.clientWidth * dpr));
    const h = Math.max(1, Math.round(hero.clientHeight * dpr));
    if (tela.width !== w || tela.height !== h) { tela.width = w; tela.height = h; }
    caricaFoto();
  };

  // ingressi: mouse, inclinazione del telefono, altrimenti un leggero ondeggiare da solo
  const obiettivo = { x: 0, y: 0 }, punto = { x: 0, y: 0 };
  tela.statoCampo = { obiettivo, punto };   // per controllare l'effetto dall'esterno
  let ultimoIngresso = -1e9;
  window.addEventListener("mousemove", e => {
    obiettivo.x = e.clientX / window.innerWidth * 2 - 1;
    obiettivo.y = e.clientY / window.innerHeight * 2 - 1;
    ultimoIngresso = performance.now();
  }, { passive: true });
  window.addEventListener("deviceorientation", e => {
    if (e.gamma == null || e.beta == null) return;
    obiettivo.x = Math.max(-1, Math.min(1, e.gamma / 25));
    obiettivo.y = Math.max(-1, Math.min(1, (e.beta - 45) / 25));
    ultimoIngresso = performance.now();
  }, { passive: true });

  let inVista = true, inCorsa = false;
  const disegna = ora => {
    const t = ora / 1000;
    if (ora - ultimoIngresso > 3000) {
      obiettivo.x = Math.sin(t * 0.23) * 0.55;
      obiettivo.y = Math.cos(t * 0.17) * 0.3;
    }
    punto.x += (obiettivo.x - punto.x) * 0.05;
    punto.y += (obiettivo.y - punto.y) * 0.05;
    const avanti = Math.max(0, Math.min(1, window.scrollY / (hero.offsetHeight * 0.9)));

    misura();
    if (!pronta) return;
    gl.viewport(0, 0, tela.width, tela.height);

    // copertura come object-fit: cover, con un 10% di margine per i movimenti
    const aTela = tela.width / tela.height, aFoto = larghezzaFoto / altezzaFoto;
    let sx = 1, sy = 1;
    if (aTela > aFoto) sy = aFoto / aTela; else sx = aTela / aFoto;
    sx *= 0.9; sy *= 0.9;

    gl.disable(gl.BLEND);
    gl.useProgram(pFoto);
    gl.bindBuffer(gl.ARRAY_BUFFER, bufTriangolo);
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.uniform1i(U.foto, 0);
    gl.uniform2f(U.scala, sx, sy);
    gl.uniform2f(U.spost, (1 - sx) / 2, (1 - sy) / 2);
    gl.uniform2f(U.punto, punto.x, punto.y);
    gl.uniform1f(U.avanti, avanti);
    gl.uniform1f(U.orizzonte, orizzonte);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    gl.disableVertexAttribArray(aPos);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.useProgram(pPolline);
    gl.bindBuffer(gl.ARRAY_BUFFER, bufPolline);
    gl.enableVertexAttribArray(aSeme);
    gl.vertexAttribPointer(aSeme, 3, gl.FLOAT, false, 0, 0);
    gl.uniform1f(U.pTempo, t);
    gl.uniform2f(U.pPunto, punto.x, punto.y);
    gl.uniform1f(U.pAvanti, avanti);
    gl.uniform1f(U.pOrizzonte, orizzonte);
    gl.uniform1f(U.pDpr, dpr);
    gl.drawArrays(gl.POINTS, 0, N_POLLINE);
    gl.disableVertexAttribArray(aSeme);

    if (!tela.classList.contains("pronto")) tela.classList.add("pronto");
  };
  const ciclo = ora => {
    if (!inVista || document.hidden) { inCorsa = false; return; }
    disegna(ora);
    requestAnimationFrame(ciclo);
  };
  const avvia = () => { if (!inCorsa && inVista && !document.hidden) { inCorsa = true; requestAnimationFrame(ciclo); } };

  new IntersectionObserver(voci => { inVista = voci.some(v => v.isIntersecting); avvia(); }).observe(hero);
  document.addEventListener("visibilitychange", avvia);
  window.addEventListener("resize", misura);
  foto.addEventListener("load", () => { caricaFoto(); avvia(); });
  tela.addEventListener("webglcontextlost", e => { e.preventDefault(); tela.remove(); });
  misura();
  avvia();
  return tela;
}
