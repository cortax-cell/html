function signup(event){
    //event.preventDefault();
    var semail = document.getElementById("semail").value;
    var spassword = document.getElementById("spassword").value;
    localStorage.setItem("semail", semail);
    localStorage.setItem("spassword", spassword);
    alert("details saved");
}
function login(event){
   // event.preventDefault();
    var email = document.getElementById("Email").value;
    var password = document.getElementById("Password").value;
    var storedEmail = localStorage.getItem("semail");
    var storedPassword = localStorage.getItem("spassword");
    if(email===storedEmail && password===storedPassword){
        alert("login success");
    }
    else{
        alert("login unsuccessful");
    }
}