var firebaseConfig = {
    apiKey: "AIzaSyALGjCfYdy1XqhdIk7MC4UbyeskzKkklmY",
    authDomain: "kwitter-f2d32.firebaseapp.com",
    databaseURL: "https://kwitter-f2d32-default-rtdb.firebaseio.com",
    projectId: "kwitter-f2d32",
    storageBucket: "kwitter-f2d32.appspot.com",
    messagingSenderId: "1089606276538",
    appId: "1:1089606276538:web:3973e08cb3236985f8b983",
    measurementId: "G-8T8HYR54WZ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}