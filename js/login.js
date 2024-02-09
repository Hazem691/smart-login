var emailLogin = document.querySelector("#emailLogin");

var passwordLogin = document.querySelector("#passwordLogin") ;

var buttonlogin   = document.querySelector("#buttonlogin") ;



var logininfo = [] ;

if(localStorage.getItem('logininfo')!=null){
    logininfo = JSON.parse(localStorage.getItem('logininfo')) ;
}



function login(){
    var emailval = emailLogin.value ;
    var passwordval= passwordLogin.value ;

    if(emailLogin.value=== "" || passwordLogin.value === ""){

        document.getElementById("errormsg").classList.replace('d-none','d-block') ;

    }

    if(inputsChecker(emailval,passwordval)==true){
        window.location.href = "home.html" ;
    }
    else{
        document.getElementById("errordata").classList.replace('d-none','d-block') ;
    }
}

function inputsChecker(email, password) {
    for (var i = 0; i < logininfo.length; i++) {
        if (logininfo[i].email === email && logininfo[i].password === password) {
            localStorage.setItem("username", JSON.stringify(logininfo[i].name));
            return true; // Added return statement to indicate successful login
        }
    }
    return false; // Return false if no matching credentials are found
}


    




buttonlogin.addEventListener('click',()=>{
    login() ;
})