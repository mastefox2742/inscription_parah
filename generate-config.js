// Génère `firebase-config.js` à partir des variables de `.env`
// (ou des variables d'environnement, ex. sur Vercel).
// À lancer avant chaque déploiement :  node generate-config.js
const fs = require('fs');

function loadEnv() {
  const env = { ...process.env };
  if (fs.existsSync('.env')) {
    for (const line of fs.readFileSync('.env', 'utf8').split('\n')) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
      if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
  }
  return env;
}

const e = loadEnv();
const required = ['FIREBASE_API_KEY', 'FIREBASE_AUTH_DOMAIN', 'FIREBASE_PROJECT_ID', 'FIREBASE_APP_ID'];
const missing = required.filter((k) => !e[k]);
if (missing.length) {
  console.error('❌ Variables manquantes : ' + missing.join(', ') + '\n   Crée un fichier .env (voir .env.example).');
  process.exit(1);
}

const config = {
  apiKey: e.FIREBASE_API_KEY,
  authDomain: e.FIREBASE_AUTH_DOMAIN,
  projectId: e.FIREBASE_PROJECT_ID,
  storageBucket: e.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: e.FIREBASE_MESSAGING_SENDER_ID,
  appId: e.FIREBASE_APP_ID,
  measurementId: e.FIREBASE_MEASUREMENT_ID
};

const out =
  '// ⚠️ Fichier GÉNÉRÉ automatiquement par generate-config.js — ne pas committer, ne pas éditer à la main.\n' +
  'export const firebaseConfig = ' + JSON.stringify(config, null, 2) + ';\n';

fs.writeFileSync('firebase-config.js', out);
console.log('✅ firebase-config.js généré.');
