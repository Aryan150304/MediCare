var firebaseConfig = {
    apiKey: "AIzaSyCCV881WHGbZJk5K_LbWmFmBK1e6qnI00U",
    authDomain: "sharda-medicare-ambulance.firebaseapp.com",
    databaseURL: "https://sharda-medicare-ambulance-default-rtdb.firebaseio.com",
    projectId: "sharda-medicare-ambulance",
    storageBucket: "sharda-medicare-ambulance.appspot.com",
    messagingSenderId: "122149609155",
    appId: "1:122149609155:web:6d7b3a59080ede32c0cc76"
};

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
  
 // Set database variable
 var database = firebase.database()
 var auth = firebase.auth()

 var user_ref = database.ref('users/'+'tarun9702')
 user_ref.on('value',function(snapshot){
    var data = snapshot.val()

    var lat = data.lat;
    var long = data.long;
})