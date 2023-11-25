
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id = "+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
var firebaseConfig = {
      apiKey: "AIzaSyAXdL8yhZp3iz9-3xt0IlL9gMOg5dEHGGc",
      authDomain: "kwitter-a-9637d.firebaseapp.com",
      databaseURL: "https://kwitter-a-9637d-default-rtdb.firebaseio.com",
      projectId: "kwitter-a-9637d",
      storageBucket: "kwitter-a-9637d.appspot.com",
      messagingSenderId: "499013490956",
      appId: "1:499013490956:web:ec51e9dcd9a598d2615129"
    };
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    console.log(user_name);
    document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database()/ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    }
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
    }