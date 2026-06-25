# PARAH — Inscription « Le Mindset de l'Entrepreneur »

Landing page d'inscription à la formation **« Le Mindset de l'Entrepreneur »** de l'Institut d'Entrepreneuriat **PARAH** (Brazzaville).

🌐 **En ligne :** https://inscription-entrepreneur.vercel.app

## Stack

- **Front** : HTML statique + Tailwind CSS (CDN)
- **Base de données** : Firebase Firestore (collection `inscriptions`)
- **Authentification admin** : Firebase Authentication (email/mot de passe)
- **Hébergement** : Vercel

## Pages

| Page | Rôle |
|---|---|
| `index.html` | Landing page publique + formulaire d'inscription |
| `admin.html` (`/admin`) | Espace admin protégé : liste des inscriptions, export CSV, suppression. Accès via le logo « PARAH ». |

## Fichiers

| Fichier | Rôle |
|---|---|
| `firestore.rules` | Règles de sécurité (création publique, lecture/suppression réservées à l'admin connecté) |
| `vercel.json` | Configuration d'hébergement Vercel |
| `LIVRAISON.md` | Guide de mise en production (Firebase + Vercel) |
| `DESIGN.md` / `screen.png` | Charte graphique et maquette d'origine |
| `code.html` | Fichier d'origine du design (référence) |

## Déploiement

```bash
vercel --prod
```

> Les clés Firebase Web présentes dans le code sont **publiques par conception** ; la sécurité est assurée par `firestore.rules` et l'authentification, pas par le secret des clés.
