import firebase from 'firebase';

const firebaseConfig = {
      apiKey: "AIzaSyCa27GIoXfT3OyEyJOoDiJocEPPxr1ZLKk",
      authDomain: "auth-app-234e6.firebaseapp.com",
      databaseURL: "https://auth-app-234e6.firebaseio.com",
      projectId: "auth-app-234e6",
      storageBucket: "auth-app-234e6.appspot.com",
      messagingSenderId: "875867788032",
      appId: "1:875867788032:web:84801c3f4c4f2e941199e5",
      measurementId: "G-WJQ9G674JP"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;