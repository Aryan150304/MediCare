var firebaseConfig = {
    apiKey: "AIzaSyCCee4APDmKdDGy3StcOeiHmrOu_ibAVx4",
    authDomain: "wrud-a2b43.firebaseapp.com",
    databaseURL: "https://wrud-a2b43-default-rtdb.firebaseio.com",
    projectId: "wrud-a2b43",
    storageBucket: "wrud-a2b43.appspot.com",
    messagingSenderId: "229109207041",
    appId: "1:229109207041:web:5c3a4c2008eecbab34b000"
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
    const fname = document.getElementById("first_name").value
    const lname = document.getElementById("last_name").value

    database.ref('users/' + username).set({
        email: email,
        first_name: fname,
        username : username,
        last_name : lname,
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