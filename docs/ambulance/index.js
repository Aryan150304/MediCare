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


document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})
firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("welcome.html")
    }
})

function signup(){
    const email = document.getElementById("email").value
    const password = document.getElementById("pass").value
    var username = document.getElementById('username').value
    const hospital_name = document.getElementById("first_name").value
    const lname = document.getElementById("last_name").value

    database.ref('users/' + username).set({
        email: email,
        hospital_name: hospital_name,
        username : username,
        lpincode : lname,
        lat: 0,
        long: 0,
        need: false,
        // last_login : Date.now()
    })

    alert('User Created!!')
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function() {
    })
    .catch(function(error) {
        var error_code = error.code
        var error_message = error.message
    
        alert(error_message)
    })
}

// function bookamb(){
//     navigator.geolocation.watchPosition(function(position) {
//         var lat = position.coords.latitude;
//         var lng = position.coords.longitude;
//         // Save the coordinates to the database
//         console.log(lat + " " + lng)
//         var updates = {
//             lat: lat,
//             long: lng
//         }
//         database.ref('users/' + username).update(updates)
//     });
// }

function login(){
    var email = document.getElementById('email').value
    const password = document.getElementById("pass").value

    // database.ref('users/' + username).update({
    //     last_login : Date.now()
    // })
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function() {
    })
    .catch((error)=>{
        var error_code = error.code
        var error_message = error.message
    
        alert(error_message)
    })
}



function forgotPass(){
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert("Reset link sent to your email id")
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}