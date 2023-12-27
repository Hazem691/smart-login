var thename = localStorage.getItem("username") ;



document.getElementById("data").innerHTML = "Welcome " + thename ;


document.getElementById("logout").addEventListener('click',function(){
    console.log("clicked") ;
    window.location.href = "index.html" ;
})