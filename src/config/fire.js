import * as firebase from "firebase";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDOdTYjJq0EiHbnz-xWn0HQTGitohEwklc",
  authDomain: "adminpanel-a95b7.firebaseapp.com",
  databaseURL: "https://adminpanel-a95b7.firebaseio.com",
  projectId: "adminpanel-a95b7",
  storageBucket: "adminpanel-a95b7.appspot.com",
  messagingSenderId: "1057924985680",
  appId: "1:1057924985680:web:6abecb83617bb72b6bf255"
};
 
  const fire=firebase.initializeApp(firebaseConfig);
  export default fire;
