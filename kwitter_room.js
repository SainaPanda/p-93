var firebaseConfig = {
      apiKey: "AIzaSyAQuq-9DGJb41mns0WvX6Urfcpr7de0R4I",
      authDomain: "c-94-8dfd8.firebaseapp.com",
      databaseURL: "https://c-94-8dfd8-default-rtdb.firebaseio.com",
      projectId: "c-94-8dfd8",
      storageBucket: "c-94-8dfd8.appspot.com",
      messagingSenderId: "176201997852",
      appId: "1:176201997852:web:80623f0c05648ce3b1c9d9"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome" + user_name

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child("room_name").update({
            purpose : "adding room name"
      })

            localStorage.setItem("room_name", room_name);

            window.location = "kwitterpage.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room name' id=" +Room_names+"onclick = 'redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHtml += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitterpage.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
