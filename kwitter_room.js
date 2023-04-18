
var firebaseConfig = {
      apiKey: "AIzaSyBmQ-LZKmRAy5u_6byeRrmxfFl-1f7CZaw",
      authDomain: "classtest-716d4.firebaseapp.com",
      databaseURL: "https://classtest-716d4-default-rtdb.firebaseio.com",
      projectId: "classtest-716d4",
      storageBucket: "classtest-716d4.appspot.com",
      messagingSenderId: "560604630738",
      appId: "1:560604630738:web:e5eb3ba66b99c2e3cd270b",
      measurementId: "G-X3FJYXGDYV"
    };
    
     firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name");

     document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

     function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });
 });

}

getData();



function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"

}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitterhome.html";
}