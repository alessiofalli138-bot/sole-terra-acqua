# Sole Terra Acqua — sito

Sito dell'azienda agricola Sole Terra Acqua (Viterbo): il cliente compone la sua
cassetta di verdure e invia l'ordine via WhatsApp.

**Online su:** https://alessiofalli138-bot.github.io/sole-terra-acqua/

## Com'e fatto

Sito statico puro: nessun server, nessun database, nessun costo.
Tre "pagine" che in realta sono tre sezioni dello stesso file HTML.

| File | Cosa contiene |
|---|---|
| `index.html` | Home, Componi la cassetta (4 passaggi), Dashboard titolare |
| `styles.css` | Tutto lo stile |
| `app.js` | Catalogo prodotti, carrello, consegne, ordine WhatsApp, dashboard |
| `sw.js` + `manifest.webmanifest` | PWA: il sito si installa come app sul telefono |
| `assets/` | Logo, foto del campo, immagini cassette, catalogo prodotti |

## Le cose che si toccano piu spesso

Sono tutte in cima ad `app.js`:

- **Prodotti** (`PRODUCTS`, riga 13) — nome, peso, disponibilita.
  Ogni prodotto ritaglia la sua immagine da uno dei tre PNG "catalogo-vettoriali"
  tramite le coordinate `x` / `y`.
- **Cassette e prezzi** (`BOXES`) — piccola 12 EUR (3-5 quote, 6 incluse... vedi file),
  media 14 EUR, grande 17 EUR. Ogni quota oltre quelle incluse costa 2 EUR.
- **Numero WhatsApp** (`WHATSAPP_NUMBER`).

## Dashboard titolare

Si apre aggiungendo `?a=1` all'indirizzo, poi si inserisce il PIN.
Attenzione: gli ordini e i clienti sono salvati nel browser (localStorage), quindi
restano solo sul dispositivo che li ha aperti e si perdono se si cancellano i dati
del browser.

## Provare le modifiche in locale

```
python -m http.server 5173 --directory .
```

poi apri http://localhost:5173

## Pubblicare le modifiche

```
git add -A
git commit -m "descrizione della modifica"
git push
```

GitHub Pages si aggiorna da solo in circa un minuto.
