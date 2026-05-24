import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { exeUrls } from './config';

const firebaseConfig = exeUrls.firebaseConfig;

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
