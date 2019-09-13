import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyACQq8zB_-FQcDOSv52X9IaeMRn1fxlP-0',
  authDomain: 'hhj-jongno-archery-competition.firebaseapp.com',
  databaseURL: 'https://hhj-jongno-archery-competition.firebaseio.com',
  projectId: 'hhj-jongno-archery-competition',
  storageBucket: 'hhj-jongno-archery-competition.appspot.com',
  messagingSenderId: '860731656232',
  appId: '1:860731656232:web:b200eef77a06191a688d1d'
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth;

export { auth };
