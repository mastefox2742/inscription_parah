# PARAH — Inscription « Le Mindset de l'Entrepreneur »

Landing page d'inscription avec formulaire connecté à **Firebase Firestore**, hébergée sur **Vercel**.

## 📁 Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | La page complète (design + formulaire + logique Firebase) |
| `firestore.rules` | Règles de sécurité de la base de données |
| `vercel.json` | Configuration d'hébergement Vercel |
| `code.html` | Fichier d'origine du design (référence, non utilisé en prod) |
| `screen.png` / `DESIGN.md` | Maquette et charte graphique d'origine |

---

## 🚀 Mise en production — 3 étapes

### Étape 1 — Créer le projet Firebase (~5 min)

1. Va sur [console.firebase.google.com](https://console.firebase.google.com) → **Ajouter un projet** (ex. `parah-inscriptions`).
2. Dans le menu → **Firestore Database** → **Créer une base de données** → mode **Production** → région la plus proche (ex. `europe-west1`).
3. Onglet **Règles** → colle le contenu de [`firestore.rules`](firestore.rules) → **Publier**.
4. Roue dentée ⚙️ → **Paramètres du projet** → section **Tes applications** → icône **Web `</>`** → enregistre l'app (ex. « Site PARAH »).
5. Firebase affiche un bloc `firebaseConfig` avec 6 valeurs. **Copie-les.**

### Étape 2 — Brancher la config dans le site

Ouvre `index.html`, trouve le bloc `const firebaseConfig = {` (vers la fin) et **remplace les valeurs `VOTRE_...`** par celles copiées à l'étape 1.

```js
const firebaseConfig = {
    apiKey: "...",            // ← tes vraies valeurs
    authDomain: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "..."
};
```

> ℹ️ Ces clés Firebase Web sont **publiques par nature** — c'est normal qu'elles soient dans le code. La sécurité est assurée par les règles Firestore (`firestore.rules`), pas par le secret des clés.

### Étape 3 — Déployer sur Vercel

- **Option A (la plus simple)** : va sur [vercel.com](https://vercel.com) → **Add New → Project** → glisse le dossier, ou connecte un dépôt Git. Vercel détecte le site statique et génère une URL en ligne en ~1 min.
- **Option B (en local)** : `npm i -g vercel` puis `vercel --prod` dans ce dossier.

---

## 👀 Où PARAH consulte les inscriptions

Console Firebase → **Firestore Database** → collection **`inscriptions`**.
Chaque inscription contient : `nom`, `email`, `telephone`, `projet`, `formation`, `createdAt`, `source`.

Export Excel/CSV possible via la console ou avec une petite page admin (à ajouter plus tard si besoin).

---

## ✅ Tester avant livraison

1. Ouvre le site en ligne (ou en local : `python -m http.server` puis `localhost:8000`).
2. Remplis le formulaire et valide.
3. Vérifie que l'inscription apparaît dans Firestore → collection `inscriptions`.

## 🔮 Améliorations possibles (après livraison)

- Notification email à chaque inscription (extension Firebase « Trigger Email » ou Cloud Function).
- Page admin protégée par mot de passe pour lister/exporter les inscriptions.
- Nom de domaine personnalisé (ex. `inscription.parah.com`) configurable dans Vercel.
