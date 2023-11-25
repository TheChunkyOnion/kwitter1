var firebaseConfig = {
    apiKey: "AIzaSyAXdL8yhZp3iz9-3xt0IlL9gMOg5dEHGGc",
    authDomain: "kwitter-a-9637d.firebaseapp.com",
    databaseURL: "https://kwitter-a-9637d-default-rtdb.firebaseio.com",
    projectId: "kwitter-a-9637d",
    storageBucket: "kwitter-a-9637d.appspot.com",
    messagingSenderId: "499013490956",
    appId: "1:499013490956:web:ec51e9dcd9a598d2615129"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child("user_name").update({
        purpose: "addinguser"
    });
}