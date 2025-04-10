const login = document.querySelectorAll("#login")
const algnCtlg = document.querySelectorAll('#algnCtlg')

algnCtlg.forEach(function(algnCtlg){
    algnCtlg.onclick = function(){
        window.location.href = 'catalog.html'
    }
})

login.forEach(function(login){
    login.onclick = function(){

        // window.open()        
        window.location.href = 'login.html'
    }
})

// login.onclick = function(){
//     window.location.href = "login.html"
// }


// login.onclick = function(){
//     const section1 = document.querySelector('.section2');
//     window.scrollTo({ top: section1.offsetTop, behavior: 'smooth' });
// }
