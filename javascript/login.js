


let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinBtn.onclick = function(){
    nameField.style.maxHeight ="0";
    title.innerHTML = "Sign In"
    signupBtn.classList.add("login-btn");
    signinBtn.classList.remove("login-btn");
}
signupBtn.onclick = function(){
    nameField.style.maxHeight = "280px";
    title.innerHTML = "Sign Up"
    signinBtn.classList.remove("login-btn");
    signupBtn.classList.add("login-btn");
}
/* second contion**/


const attempt = 3; 
function validate(){
let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
if ( username == "rtc@gmail.com" && password == "rtc123"){
alert ("Login successfully");
window.location.assign("reasoning.html")
return false; 
}
else{ 
attempt --;
alert("You have left "+attempt+" attempt;")
}
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}