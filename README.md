# De Teletijdmachine

Een online quiz waarin spelers 30 historische foto's koppelen aan het juiste **thema**, **jaartal** en **plaats**. De klok tikt; alle 30 juist = snelste tijd op het scorebord.

## Bestanden

- `index.html` — het spel (HTML/CSS/JS in één bestand)
- `photos.js` — de 30 foto's en hun juiste antwoorden
- `README.md` — dit bestand

## Snel starten (lokaal testen)

Open `index.html` in een browser door op het bestand te dubbelklikken. Het spel werkt direct met placeholder-afbeeldingen. Het scorebord slaat tijden lokaal op (in je browser).

> Wil je foto's via URL inladen (zie hieronder), dan moet je het spel via een server openen — `file://` blokkeert sommige verzoeken. Eenvoudigste manier: ga in de map staan en draai `python3 -m http.server`, daarna openen via `http://localhost:8000`.

## Foto's aanpassen

Open `photos.js` en bewerk de 30 entries. Per foto:

```js
{ url: "https://...", theme: "Maanlanding", year: 1969, place: "Maan" }
```

- `url` — link naar de foto. Laat leeg (`""`) om een placeholder te tonen.
- `theme` — het juiste thema (één regel tekst).
- `year` — het juiste jaartal als **getal** (`1969`, niet `"1969"`).
- `place` — de juiste plaatsnaam (één regel tekst).

De fout-antwoorden worden automatisch gekozen uit de andere 29 foto's. Bij elke ronde worden de foto's én de keuzes opnieuw geschud.

### Tips voor foto-URL's

- Eigen hosting (GitHub, je website, Imgur): plak de directe link naar het `.jpg`/`.png`-bestand.
- Wikimedia Commons werkt vaak goed: gebruik de "Original file" URL (`https://upload.wikimedia.org/...`).
- Wil je geen externe links gebruiken? Zet de foto's in dezelfde map en gebruik bv. `"foto01.jpg"`.

## Gedeeld scorebord (Firebase Realtime Database)

Standaard worden tijden alleen op het eigen apparaat bewaard. Voor een wereldwijd scorebord:

1. Ga naar [console.firebase.google.com](https://console.firebase.google.com) en maak een gratis project aan.
2. Kies in de zijbalk **Build → Realtime Database** en klik **Create Database**.
3. Kies een regio en start in **test mode** (open lees/schrijf voor 30 dagen — prima om te beginnen; daarna kun je regels strenger zetten).
4. Kopieer de URL die bovenaan staat, bv. `https://teletijd-xxxx-default-rtdb.europe-west1.firebasedatabase.app`.
5. Open `index.html`, zoek de regel:

   ```js
   const FIREBASE_URL = "";
   ```

   en vul aan:

   ```js
   const FIREBASE_URL = "https://teletijd-xxxx-default-rtdb.europe-west1.firebasedatabase.app/scores";
   ```

Klaar — vanaf nu komen alle tijden in dezelfde lijst. Het pad `/scores` mag je wijzigen, zolang het maar overal hetzelfde is.

### Beveiligingsregels (later)

Test-mode laat iedereen lezen én schrijven. Voor permanente inzet kun je in **Realtime Database → Rules** dit instellen om alleen schrijven van geldige scores toe te staan:

```json
{
  "rules": {
    "scores": {
      ".read": true,
      "$id": {
        ".write": "!data.exists()",
        ".validate": "newData.hasChildren(['name','ms','at']) && newData.child('ms').isNumber() && newData.child('name').isString() && newData.child('name').val().length <= 20"
      }
    }
  }
}
```

## Hosten op een website

### GitHub Pages (gratis)

1. Maak een nieuw GitHub-repo.
2. Upload `index.html` en `photos.js` (en eventueel foto's) naar de hoofdmap.
3. Ga naar **Settings → Pages → Source: `main` branch / root**.
4. Na 1-2 minuten staat het spel op `https://JOU.github.io/REPO-NAAM/`.

### Andere opties

- **Netlify Drop** ([app.netlify.com/drop](https://app.netlify.com/drop)): sleep de hele map op de pagina, klaar.
- **Cloudflare Pages**, **Vercel**, **itch.io** (zip de map en upload).
- **Eigen webhost**: upload via FTP.

## Niets te ingewikkeld maken

Het hele spel is één HTML-bestand + één JS-bestand. Geen build-stap, geen frameworks. Pas aan wat je wil en open opnieuw.
