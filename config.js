import firebase,{initializeApp, firestore} from "firebase";


const firebaseConfig = { 
apiKey: "AIzaSyCOSLmWeANxKrRMImJk83zOgPf-JO9TKvA",
  authDomain: "biblioteca-eletronica-35b3f.firebaseapp.com",
  projectId: "biblioteca-eletronica-35b3f",
  storageBucket: "biblioteca-eletronica-35b3f.appspot.com",
  messagingSenderId: "919008143589",
  appId: "1:919008143589:web:82a911680e933b3184cc0c"};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  console.log(err);
}

export default firebase.firestore();