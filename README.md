# Ruggegraattest

Een wetenschappelijk klinkende maar volledig onzinnige test die meet hoe stevig
jouw ruggegraat is aan de hand van 6 herkenbare sociale scenario's. Aan het
eind krijg je een van de 5 eindprofielen, van *De Blubberpudding* tot
*De Betonnen Bunker*.

## Lokaal draaien

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Inhoud aanpassen

Alle vragen, antwoorden en eindprofielen staan in
[`src/app/quiz-data.ts`](src/app/quiz-data.ts). Punten per antwoord bepalen de
score, `getProfile()` kiest het bijbehorende profiel op basis van het
`minScore`/`maxScore`-bereik.

## Domein (TransIP) + hosting (Vercel) koppelen

1. **Push deze code naar een Git-repo** (GitHub/GitLab/Bitbucket) — Vercel deployt
   vanuit een repo.
2. Ga naar [vercel.com/new](https://vercel.com/new), importeer de repo en deploy
   (geen extra configuratie nodig, Vercel herkent Next.js automatisch).
3. In het Vercel-project: **Settings → Domains** → voeg `ruggegraattest.nl` toe
   (en eventueel `www.ruggegraattest.nl`).
4. Vercel toont de DNS-records die nodig zijn (meestal een `A`-record naar
   `76.76.21.21` en/of een `CNAME` voor `www` naar `cname.vercel-dns.com`).
5. Log in bij **TransIP → Domeinen → ruggegraattest.nl → DNS-instellingen** en
   voeg die records toe (of vervang de bestaande A/CNAME-records).
6. Wacht op DNS-propagatie (meestal binnen een uur, kan tot 24u duren) — Vercel
   geeft automatisch een geldig SSL-certificaat uit zodra de DNS klopt.

## Bezoekers- en voltooiingsteller aanzetten

De site telt hoeveel mensen 'm bezoeken en hoeveel mensen de test volledig
uitzitten (zie `StatsBar.tsx`). Dat staat op een gratis Redis-database bij
[Upstash](https://upstash.com), omdat Vercel's serverless functies niks
onthouden tussen requests — een lokaal telbestandje zou dus niet werken.

1. Maak een gratis account op [console.upstash.com](https://console.upstash.com).
2. Maak een nieuwe **Redis**-database aan (kies een regio dichtbij, bv.
   `eu-west-1`). De gratis tier is meer dan genoeg voor een tellertje.
3. Kopieer op het database-dashboard de **`UPSTASH_REDIS_REST_URL`** en
   **`UPSTASH_REDIS_REST_TOKEN`**.
4. Zet beide in het Vercel-project onder **Settings → Environment Variables**
   (voor Production, en optioneel Preview/Development) en redeploy.
5. Voor lokaal testen: zet dezelfde twee variabelen in een `.env.local`
   bestand in de projectroot (dit bestand is al genegeerd door git).

Zolang deze variabelen niet gezet zijn, toont de site netjes een
placeholder-tekstje in plaats van te crashen — je hoeft dit dus niet meteen
te doen om de rest van de site te kunnen deployen.

## Later uit te breiden

- Zwaardere animaties bij het resultaatscherm (bv. met Framer Motion) —
  `Confetti.tsx` en de `animate-pop-in`/`animate-wiggle` classes in
  `globals.css` zijn een lichte basis om op verder te bouwen.
- Custom gedeelde afbeelding bij het delen van een resultaat (nu is delen een
  simpele tekst + link via `ShareButton.tsx`).
