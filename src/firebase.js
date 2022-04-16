import firebase from "firebase/app";
import "firebase/firestore";
let config = {
  apiKey: "AIzaSyAAdObaxqFa-zGyQAvNdi8ANucl70894BI",
  authDomain: "video-chat-app-4238a.firebaseapp.com",
  projectId: "video-chat-app-4238a",
  storageBucket: "video-chat-app-4238a.appspot.com",
  messagingSenderId: "348915191048",
  appId: "1:348915191048:web:d4b78282c825798258b0bd",
};
firebase.initializeApp(config);
export default firebase.firestore();
