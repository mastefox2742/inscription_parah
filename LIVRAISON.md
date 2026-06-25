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

### Étape 2 — Brancher la config via `.env` (clés hors du code)

Les clés ne sont **pas écrites en dur** dans le code. Elles vivent dans un fichier `.env` (non committé, non déployé) qui sert à générer `firebase-config.js`.

1. Copie `.env.example` en `.env`.
2. Remplis les 6 valeurs Firebase copiées à l'étape 1.
3. Génère le fichier que le navigateur utilise :
   ```bash
   node generate-config.js   # crée firebase-config.js depuis .env
   ```

> ℹ️ Les clés Firebase **Web** ne sont pas des secrets (Google les conçoit pour le code client) : sur le site en ligne elles restent visibles dans le navigateur. Le `.env` sert surtout à **ne pas les committer** sur GitHub. La vraie sécurité = `firestore.rules` + Firebase Auth (+ App Check en option).

### Étape 3 — Déployer sur Vercel

- **En local** : `node generate-config.js` puis `vercel --prod` dans ce dossier.
- ⚠️ `.env` est exclu du déploiement (`.vercelignore`) ; `firebase-config.js` est déployé (le navigateur en a besoin).

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
