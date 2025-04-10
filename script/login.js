const signUp = document.getElementById('signUp')
const login = document.getElementById('login')

signUp.onclick = function(){
    const signPW = document.getElementById('signPW').value.trim()
    const signEML = document.getElementById('signEML').value.trim()
    const signNM = document.getElementById('signNM').value.trim()
    if(signEML ==='' || signNM ==='' || signPW === '' ){
        Swal.fire({
            icon: "info",
            title: "Oops",
            text: "You Have to Fill All Fields",
          });
    }else{
        window.location.href = "main.html"
    }
}


login.onclick = function(){
    const logPW = document.getElementById('logPW').value.trim()
    const logEML = document.getElementById('logEML').value.trim()
    if(logEML ===''|| logPW === '' ){
        alert("You Have to Fill All Fields")
    }else{
        window.location.href = "main.html"
    }
}
