import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey:
    process.env.REACT_APP_FIREBASE_API_KEY ??
    "AIzaSyADpihRvumqkP0pDdisqQIRScGh5HVEnoc",
  authDomain:
    process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ?? "loxadev-afa68.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ?? "loxadev-afa68",
  storageBucket:
    process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ??
    "loxadev-afa68.firebasestorage.app",
  messagingSenderId:
    process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ?? "344388726453",
  appId:
    process.env.REACT_APP_FIREBASE_APP_ID ??
    "1:344388726453:web:bb05eca6d149d25cee98fc",
  measurementId:
    process.env.REACT_APP_FIREBASE_MEASUREMENT_ID ?? "G-S39KRZ8C24",
};

export const firebaseApp = initializeApp(firebaseConfig);

/**
 * Analytics solo en navegador y cuando el entorno lo permite (p. ej. no en tests).
 * La API key del cliente es pública por diseño; refuerza reglas en Firebase Console.
 */
export async function initFirebaseAnalytics() {
  if (process.env.NODE_ENV === "test") return null;
  if (typeof window === "undefined") return null;
  if (!(await isSupported())) return null;
  return getAnalytics(firebaseApp);
}
