# Could Seed — site du groupe

Site vitrine du groupe **Could Seed** : page d'accueil publique (bio, dates de tournée, vidéos, albums, réseaux, contact) et une page **Pro** (`/pro`) destinée aux programmateurs/journalistes pour télécharger l'EPK, le rider technique, les photos et les logos.

## Technologies utilisées

- **Angular 21** (composants standalone, sans NgModule, mode *zoneless* — pas de `zone.js`, la réactivité passe par des `signal()`)
- **TypeScript 5.9**
- **Tailwind CSS 3** (+ PostCSS/autoprefixer)
- **RxJS** pour les appels HTTP (`HttpClient`)
- **Vitest** pour les tests unitaires
- **npm** comme gestionnaire de paquets

Prérequis : Node.js ≥ 20.19 (LTS recommandé) et npm ≥ 10.

## Installation

```bash
npm install
```

## Commandes

| Commande | Effet |
|---|---|
| `npm start` | Lance le serveur de dev sur http://localhost:4200/ (rechargement auto) |
| `npm run build` | Build de production dans `dist/untitled/browser/` |
| `npm run watch` | Build en mode dev avec watch |
| `npm test` | Tests unitaires (Vitest) |
| `npx ng generate component nom` | Génère un nouveau composant |

## Structure des pages

- `/` — page d'accueil (`home-page.component.ts`) : hero, album mis en avant, dates de tournée, vidéos, bio, liens albums, réseaux, contact. Un lien **Pro** en haut à droite mène vers `/pro`.
- `/pro` — page pro (`pro-page.component.ts`) : téléchargements EPK, rider, photos, logos (FR/EN). Un lien **Accueil** en haut à droite ramène vers `/`.

## Remplir le contenu via les JSON (`public/*.json`)

Une partie du contenu est chargée dynamiquement depuis des fichiers JSON dans `public/`, servis tels quels par le build (pas besoin de recompiler pour les modifier, juste redéployer). **Attention à la casse des noms de fichiers** (les serveurs Linux en prod sont sensibles à la casse, contrairement à Windows).

### `bio.json` — section Bio

```json
{
  "fr": { "title": "Biographie", "content": "Texte en français..." },
  "en": { "title": "Biography", "content": "Text in English..." }
}
```

### `albums.json` — section Albums (liens Bandcamp)

```json
[
  { "title": "Nom de l'album", "url": "https://couldseed.bandcamp.com/album/..." }
]
```

### `videos.json` — section Vidéos

```json
[
  { "title": "Titre de la vidéo", "youtubeUrl": "https://www.youtube.com/embed/XXXXXXXXXXX" }
]
```

`youtubeUrl` doit être une URL `https://www.youtube.com/embed/...` ou `https://www.youtube-nocookie.com/embed/...` — toute autre URL est rejetée par sécurité (voir `safe-url.pipe.ts`) et n'apparaîtra pas.

### `tour-dates.json` — section Dates de tournée

```json
[
  { "date": "2026-09-15", "venue": "Nom de la salle", "city": "Ville (Pays)" }
]
```

- `date` au format ISO `YYYY-MM-DD`.
- Seules les dates **à venir** (aujourd'hui ou plus tard) s'affichent dans la liste principale.
- Les dates passées sont automatiquement regroupées par année dans un panneau repliable **"Voir les dates passées"** en bas de la section (fermé par défaut) — rien à faire de spécial, il suffit de laisser les anciennes dates dans le fichier au lieu de les supprimer.

## Contenu qui n'est PAS dans les JSON (à modifier dans le code)

Certains éléments sont écrits en dur dans les composants et nécessitent une modification de code + rebuild pour changer :

- Album mis en avant en page d'accueil (titre, cover, lecteur Bandcamp intégré) : `src/app/album-highlight.component.ts`
- Liens réseaux sociaux (actuellement des `#` à compléter) : `src/app/follow-us.component.ts`
- Email de contact : `src/app/contact.component.ts`
- Textes de la page Pro (FR/EN) : `src/app/pro-page.component.ts`

## Téléchargements de la page Pro

Les liens de la page `/pro` pointent vers des fichiers statiques dans `public/` : `EPK_CS.pdf`, `COULD_SEED_TECHNICAL_RIDER_FR.pdf`, `COULD_SEED_TECHNICAL_RIDER_ENG.pdf`, `Selection_HD.zip` (photos), `logos_could_seed.zip` (logos). Pour les mettre à jour, remplacer le fichier dans `public/` en conservant exactement le même nom (casse comprise).

## Déploiement

Le déploiement est automatisé via GitHub Actions (`.github/workflows/deploy.yml`) : à chaque push sur `main`, le site est buildé puis déposé sur un serveur FTP, avec une alerte email (succès ou échec) envoyée à l'adresse configurée. Les identifiants FTP/SMTP sont stockés en tant que secrets/variables du repo (Settings → Secrets and variables → Actions), jamais dans le code.

Une configuration Nginx de référence (cache, sécurité, protection des fichiers serveur) est disponible dans `deploy/nginx.conf.example`.
