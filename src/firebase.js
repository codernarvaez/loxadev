import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

function missingFirebaseKeys() {
  return Object.entries(firebaseConfig)
    .filter(([, value]) => value == null || value === "")
    .map(([key]) => key);
}

const missing = missingFirebaseKeys();
if (missing.length > 0) {
  throw new Error(
    `Firebase: faltan variables REACT_APP_FIREBASE_* (${missing.join(", ")}). ` +
      `Consulta .env.example y usa .env.development / .env.production / .env.local según el modo.`
  );
}

export const firebaseApp = initializeApp(firebaseConfig);

/**
 * Analytics solo en navegador y cuando el entorno lo permite (p. ej. no en tests).
 */
export async function initFirebaseAnalytics() {
  if (process.env.NODE_ENV === "test") return null;
  if (typeof window === "undefined") return null;
  if (!(await isSupported())) return null;
  return getAnalytics(firebaseApp);
}
