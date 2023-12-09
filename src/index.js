import React from 'react';
import { initializeApp } from "firebase/app";
import { createRoot } from 'react-dom';
import './index.css';
import App from './App';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJJct1dSxNnhJaj2HazhZ3BKRG2WmqlAg",
  authDomain: "business-buddies-ef03d.firebaseapp.com",
  databaseURL: "https://business-buddies-ef03d-default-rtdb.firebaseio.com",
  projectId: "business-buddies-ef03d",
  storageBucket: "business-buddies-ef03d.appspot.com",
  messagingSenderId: "233443294242",
  appId: "1:233443294242:web:8bfb448a2d442ed68f1e7b",
  measurementId: "G-18GFC5845Y"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

