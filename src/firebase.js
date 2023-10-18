import firebase from "firebase";
const firebaseConfig = {

    apiKey: "AIzaSyAXpgwv-ullZ7dNaoVc7JBjIz2KEbfb7zg",
  
    authDomain: "webs-9dbb3.firebaseapp.com",
  
    projectId: "webs-9dbb3",
  
    storageBucket: "webs-9dbb3.appspot.com",
  
    messagingSenderId: "621806513341",
  
    appId: "1:621806513341:web:d4f8104cc59a16cb041bd4",
  
    measurementId: "G-ZT583RQCBD"
  
  };
  firebase.initializeApp(firebaseConfig);
  var db=firebase.storage();
  export{db};
