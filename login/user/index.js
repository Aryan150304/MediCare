var firebaseConfig = {
    apiKey: "AIzaSyCk83Xi6CoGDurVg_TYSpQPN7v-WTiTo2w",
    authDomain: "wrud-45751.firebaseapp.com",
    databaseURL: "https://wrud-45751-default-rtdb.firebaseio.com",
    projectId: "wrud-45751",
    storageBucket: "wrud-45751.appspot.com",
    messagingSenderId: "660581515105",
    appId: "1:660581515105:web:af09e32ae9641057358f20"
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