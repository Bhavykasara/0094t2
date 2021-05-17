$(window).on('load',function(){
    roomname=localStorage.getItem("enter");
    console.log(roomname);
    document.getElementById("roomname").innerHTML='Name of this room is - '+roomname;
});

var firebaseConfig = {
    apiKey: "AIzaSyAVawmfLNSs5jYUdKD1pWgPFXHJyMd_71Q",
    authDomain: "kwitter-5d1f3.firebaseapp.com",
    databaseURL: "https://kwitter-5d1f3-default-rtdb.firebaseio.com",
    projectId: "kwitter-5d1f3",
    storageBucket: "kwitter-5d1f3.appspot.com",
    messagingSenderId: "1007999178760",
    appId: "1:1007999178760:web:017bb7f50bcdb9e32159bd",
    measurementId: "G-12H90HPT66"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function send() {
    message=document.getElementById("message").value;
    console.log(message);
    firebase.database().ref("/").child(message).update({
       purpose:"add room name"
    });
}

