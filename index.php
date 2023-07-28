<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
    <!-- bootstrap css -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <!-- Bootsrap js  -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <!-- Google icons -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <script src="https://kit.fontawesome.com/0fc8787d5f.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="static/css/chat.css">
    <link rel="stylesheet" href="static/css/home.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="index.css">
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <title>Medicare</title>
  
</head>
<body>
  <div class="landing">
        <!-- absolute elements  -->
        <a class="nav-logo" href="#">
          <img class="logo" src="https://1000logos.net/wp-content/uploads/2022/03/Medicare-Logo-768x432.png" alt="medicare logo">
      </a>
     <!-- navbar section -->
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="internal collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="docs\users\index.html">Find Ambulance</a>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="docc/profile.php">Consult</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About us</a>
            </li> -->
            <div class="buttons ">
              <ul class="navbar-nav">
              <li class="nav-item doc">
                  <a class="nav-link" href="docc/admin/">Doctor Login</a>
                </li>
                <li class="nav-item  user rounded-pill">
                  <a class="nav-link userDet" href="docc/index.php">User Login</a>
                </li>
                </ul>
            </div>
          </ul>
          
        </div>
      </div>
    </nav>
  
    <!-- paragraph section -->
    <div class="paras">
      <p class="homepara">Remove Doubts</p>
      <h1 class="homeHead">Free Doctor Consultation</h1>
      <div class="descPara">
        <p class="para1">24/7 Video Consultation. Private Consultion + online Prescription </p>
      <p class="para2">Along with AI chatbot</p>
      </div>
    </div>
    <div class="searchbars">
      <form action="" class="landingData">
        <!-- <input type="text" class="rounded-start-pill bar1" value="Mumbai"> -->
        <input type="text" class="rounded  bar2" value="Doctors">
      </form>
      <button onclick="book()" class="searchBtn rounded-pill">Search</button>
    </div>
  <!-- videoCall section -->
  <div class="videocall rounded-5">
      <img class="rounded-5 vcimage" src="images/videoCall.png"  alt="Videocall with doctor" width="97.5%">
 </div>
 <!-- <div class="Consult-image rounded-3">
   <img src="images/message.png" class="logoCon" alt="message Logo" width="30px">
   <div>
     <p class="ChatPara">Chatbot</p>
     <p class="Chatpara2">Ask any health related issue</p>
   </div>
 </div>
  </div> -->
<!-- speciality section -->
<div class="speciality">
  <p class="specialityPara">Consult top doctors online for any health concern</p>
  <p class="specialitysubPara">Private online consultions with verified doctors in all specialists</p>
</div>
<div class="health">
  <div class="baby rounded-3">
      <img src="images/baby.png" alt="baby" width="50px" class="rounded-circle babyImage">
      <p class="babyHealth">baby health</p>
  </div>
  <div class="baby rounded-3">
    <img src="images/diarrhea.png" alt="baby" width="50px" class="rounded-circle babyImage">
    <p class="babyHealth">Stomach</p>
</div>
<div class="baby rounded-3">
  <img src="images/antidepressants.png" alt="baby" width="50px" class="rounded-circle babyImage">
  <p class="babyHealth">Psychiatry</p>
</div>
<div class="baby rounded-3">
  <img src="images/kidney.png" alt="baby" width="50px" class="rounded-circle babyImage">
  <p class="babyHealth">Urology</p>
</div>
  <div class="baby rounded-3">
    <img src="images/dermis.png" alt="baby" width="50px" class="rounded-circle babyImage">
    <p class="babyHealth">Dermatology</p>
  </div>
  <div class="baby rounded-3">
   <img src="images/bacteria.png" alt="baby" width="50px" class="rounded-circle babyImage">
   <p class="babyHealth">Infectous Disease</p>
  </div>
</div>
<div class="button">
  <a href="docc/spec/" class="rounded-pill p-3 buttontext">See all specialities</a>
</div>


<div>
  <div class="row">
    <div class="col-lg-6 onlineDoc">
      <img src="images/onlineDoc.png" alt="nearest Doctor" class="onlineDocimage"width="90%">
    </div>
    <div class="col-lg-6 onlineDoctext" >
     <p class="specialityPara">Virtual meeting with doctor</p>
<p class="specialpara2">Select preferred doctor and time slot to book an in-clinic or video consultation. Its very easy and simple process to booking</p>
<div class="button">
  <a href="docc/" class="rounded-pill p-3 px-4 buttontext">find doctor now</a>
</div>

    </div>
  </div>
</div>

<!-- urgent online care -->
<div>
  <div class="row">
    <div class="col-lg-6 urgentDoctext" >
      <p class="specialityPara sp1">urgent online care</p>
 <p class="specialpara2 sp2">Tell us your health concern and we will assign you a top doctor in 60 sec.</p>
 <div class="button b3">
   <a href="docc/" class="rounded-pill p-3 px-4 buttontext">Book an appointment</a>
 </div>
 
     </div>
    <div class="col-lg-6 urgentDoc">
      <img src="images/uregentCare.png" alt="nearest Doctor" class="urgentDocimage"width="90%">
    </div>

  </div>
</div>


<div class="chat-bar-collapsible">
  <button id="chat-button" type="button" class="collapsible">Chat with us!
      <i id="chat-icon" style="color: #fff;" class="fa fa-fw fa-comments-o"></i>
  </button>

  <div class="content">
      <div class="full-chat-block">
          <!-- Message Container -->
          <div class="outer-container">
              <div class="chat-container">
                  <!-- Messages -->
                  <div id="chatbox">
                      <h5 id="chat-timestamp"></h5>
                      <p id="botStarterMessage" class="botText"><span>Loading...</span></p>
                      <div class="butt">
                        <span><button onclick="book()" style="background-color: rgb(21, 11, 129); color: #fff; height: 40px; border: none; border-radius: 5px;"> Book an appointment</button>
                        <button onclick="chatme()" style="background-color: rgb(21, 11, 129); color: #fff; height: 40px; border: none; border-radius: 5px;"> Search Something</button></span>
                      </div>
                      <br>
                  </div>

                  <!-- User input box -->
                  <div class="chat-bar-input-block">
                      <div id="userInput">
                          <input id="textInput" class="input-box" type="text" name="msg"
                              placeholder="Tap 'Enter' to send a message">
                          <p></p>
                      </div>

                      <div class="chat-bar-icons">
                          <i id="chat-icon" style="color: crimson;" class="fa fa-fw fa-heart"
                              onclick="heartButton()"></i>
                          <i id="chat-icon" style="color: #333;" class="fa fa-fw fa-send"
                              onclick="sendButton()"></i>
                      </div>
                  </div>

                  <div id="chat-bar-bottom">
                      <p></p>
                  </div>

              </div>
          </div>

      </div>
  </div>

</div>

</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="static/scripts/responses.js"></script>
<script src="static/scripts/chat.js"></script>

</body>
</html>