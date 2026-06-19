/// <reference types="vite/client" />
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Public Firebase config keys.
// These are loaded dynamically from Vite environment variables.
// Fallback defaults are provided matching the project ID in serviceAccountKey.json.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "placeholder-api-key",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "supplyco-backend.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "supplyco-backend",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "supplyco-backend.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "placeholder-sender-id",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "placeholder-app-id"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
