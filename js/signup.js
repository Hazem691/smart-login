var userName = document.querySelector("#namesignup") ;

var signupEmail = document.querySelector("#emailsignup") ;

var signupPassword = document.querySelector("#passwordsignup") ;

var signupButton = document.querySelector("#buttonsignup") ;


var logininfo = [] ;
if (localStorage.getItem("logininfo") != null) {
    logininfo = JSON.parse(localStorage.getItem("logininfo"));
  }
function signup(){
    var info = {
        name: userName.value ,
        email:signupEmail.value,
        password:signupPassword.value ,

    } ;

    if(userName.vlaue === " " || signupEmail.value == " " || signupPassword.value == " "){
        document.getElementById("errormsg").classList.replace('d-none','d-block') ;
    }
    if(checkexcistemails(signupEmail.value)){
        logininfo.push(info) ;
        localStorage.setItem('logininfo',JSON.stringify(logininfo)) ;
        document.getElementById("successmsg").classList.replace('d-none','d-flex') ;
        document.getElementById("warrning").classList.replace('d-block','d-none');
    }
    else{
        document.getElementById("warrning").classList.replace('d-none','d-block');

    }


}

signupButton.addEventListener('click',function(){

    signup();

})


    function checkexcistemails(email) {
        for (var i = 0; i < logininfo.length; i++) {
            if (logininfo[i].email === email) {
                return false;
            }
        }
        return true; // Return true after checking all emails
    }



