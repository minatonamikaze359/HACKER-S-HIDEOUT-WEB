// Firebase config (your provided key)
var firebaseConfig = {
  apiKey: "AIzaSyA0iC9ecenzjsejoBBxFC9Mld2j8L_KzRo",
  authDomain: "chatting-6b506.firebaseapp.com",
  databaseURL: "https://chatting-6b506-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chatting-6b506",
  storageBucket: "chatting-6b506.appspot.com",
  messagingSenderId: "353230609940",
  appId: "1:353230609940:web:73c1cfecbc8a1a7b7b1828"
};
if(!window.firebase || !firebase.apps){
  firebase.initializeApp(firebaseConfig);
}
