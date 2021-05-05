var firebaseConfig = {
  apiKey: "AIzaSyCPXMYK3wdDFVZZzhmq8tCCAB9E0qFsINc",
  authDomain: "letscatchat.firebaseapp.com",
  databaseURL: "https://letscatchat-default-rtdb.firebaseio.com",
  projectId: "letscatchat",
  storageBucket: "letscatchat.appspot.com",
  messagingSenderId: "336051386403",
  appId: "1:336051386403:web:7d3409a149719a98df1996"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);






welcome_user_name = localStorage.getItem("user_name");

document.getElementById("welcome_user_name").innerHTML = "Welcome " + welcome_user_name + "!";



function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
          childKey = childSnapshot.key;
          Room_names = childKey;
          //Start code

          //End code
      });
  });
}
getData();


function logout() {
  window.location = "index.html";

}


