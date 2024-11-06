import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDWD1xarOATFT0kiLx8NcduUWw3UgrwH8o',
  authDomain: 'portfolio-4ca00.firebaseapp.com',
  projectId: 'portfolio-4ca00',
  storageBucket: 'portfolio-4ca00.appspot.com',
  messagingSenderId: '819295270479',
  appId: '1:819295270479:web:b150e08b4605bfa9271c3a',
  measurementId: 'G-T8EZ06N2DX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const PROJECTS_COLLECTION = collection(db, 'Projects');

export { db, PROJECTS_COLLECTION };
