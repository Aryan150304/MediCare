var firebaseConfig = {
        apiKey: "AIzaSyBR_RXxD-K4z8pMUj15fnLaGkfDwII05OI",
    authDomain: "sharda-medicare.firebaseapp.com",
    databaseURL: "https://sharda-medicare-default-rtdb.firebaseio.com",
    projectId: "sharda-medicare",
    storageBucket: "sharda-medicare.appspot.com",
    messagingSenderId: "918421932",
    appId: "1:918421932:web:38de1c271cfe2f9914ba09"
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
    var uname = document.getElementById('username').value

    const fname = document.getElementById("first_name").value
    const lname = document.getElementById("last_name").value

    database.ref('users/' + username).set({
        email: email,
        first_name: fname,
        username : username,
        last_name : lname,
        lat: 0,
        long: 0,
        need: false,
        last_login : Date.now()
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