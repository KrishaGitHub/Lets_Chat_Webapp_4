var firebaseConfig = {
    apiKey: "AIzaSyDSjzIhWkk9X6f91-TJR7sKC_zg92xSMuk",
    authDomain: "try1-8ebd0.firebaseapp.com",
    databaseURL: "https://try1-8ebd0-default-rtdb.firebaseio.com",
    projectId: "try1-8ebd0",
    storageBucket: "try1-8ebd0.appspot.com",
    messagingSenderId: "806384789247",
    appId: "1:806384789247:web:6e46b3c6d4b03fa9ff8eca",
    measurementId: "G-THD0S830P3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  //YOUR FIRE BASE LINKS
  
      user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");
  
  function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
    });
    document.getElementById("msg").value = "";
  }