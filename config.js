
// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBWw6xjNL5ooc--3L0qmPXKQZ-JPEZqgcg",
  authDomain: "quick-courier-771d6.firebaseapp.com",
  projectId: "quick-courier-771d6",
  storageBucket: "quick-courier-771d6.firebasestorage.app",
  messagingSenderId: "549484672180",
  appId: "1:549484672180:web:c121e7d8b7503d6759d3e1",
  measurementId: "G-LPB1PCSHSF"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
