const scrollDwn = document.getElementById("scrollDwn")
const targetScroll = document.getElementById("targetScroll")
const CO = document.querySelector(".CO")
const wrapperCatalog1 = document.querySelector("#wrapperCatalog1")

const catalog1 = [
    {id:1, nama: "Nike JA 1",harga:"Rp. 1.920.000,00",img:"assets/Nike ja2.png"},
    {id:2, nama: "Nike Kobe VII",harga:"Rp. 5.220.000,00",img:"assets/Nike Kobe IX.png"},
    {id:3, nama: "Jordan Tatum 3 PF",harga:"Rp. 2.320.000,00",img:"assets/jordan Tatum 3 PF.png"},
    {id:4, nama: "Nike LeBron XXII",harga:"Rp. 3.220.000,00",img:"assets/Nike LeBron XXII.png"},
]

function displayCatalog1(){
    catalog1.forEach((catalog1) => {
        wrapperCatalog1.innerHTML += `
        <nav>
            <div>
                <img src="assets/logo2 white.svg" alt="" >
                <h1>LOOPS</h1>
            </div> 
            <ul>
                <li><a href="main.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="catalog.html">Catalog</a></li>
            </ul>
        </nav>
        <article>
            <img src="${catalog1.img}" alt="">
            <h1>${catalog1.nama}</h1>
            <p>${catalog1.harga}</p>
            <button class="buyBtn">BUY NOW</button>
        </article>
`
    })
}
displayCatalog1()

const buyBtn = document.querySelectorAll(".buyBtn")
buyBtn.forEach((button, index) => {
    button.addEventListener("click", function() {
        const CO = document.querySelector(".CO")
        const selectedCatalog = catalog1[index];
        CO.innerHTML = `
        <article>
            <div class="image">
                <img src="${selectedCatalog.img}" alt="" id="COimg">
            </div>
            <div class="article">
                <h1 id="COtitle">${selectedCatalog.nama}</h1>
                <p id="COprice">${selectedCatalog.harga}</p>
                <input type="radio" id="40">
                <label for="40">40</label> 
                <button id="COorder">ORDER</button>
                <button id="COback">BACK</button>
            </div>
        </article>
        `
        CO.style.display = "flex"

        // Move the event listener for COorder here
        const COorder = document.getElementById("COorder")
        COorder.onclick = function(){
            CO.style.display = "none"
            Swal.fire({
                title: "Payment Success!",
                text: "Your Shoe will arrive in 24 Hours!",
                icon: "success"
            });
        }
    })
})

const COback = document.getElementById("COback")
COback.onclick = function(){
    const CO = document.querySelector(".CO")
    CO.style.display = "none"
}

scrollDwn.onclick = function(){
    window.scrollTo({ top: targetScroll.offsetTop, behavior: 'smooth' });
}
