import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDCybiHHd9y16mhrz1m6_4syXxDVkCVEp0',
  authDomain: 'listatodo-79d3a.firebaseapp.com',
  projectId: 'listatodo-79d3a',
  storageBucket: 'listatodo-79d3a.appspot.com',
  messagingSenderId: '102807267841',
  appId: '1:102807267841:web:f1bbeeeff519b8b9ff2e00',
  measurementId: 'G-FFTQFB5KM8'
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
