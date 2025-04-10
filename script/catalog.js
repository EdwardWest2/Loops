const scrollDwn = document.getElementById("scrollDwn")
const signIn = document.getElementById("signIn")
const searchInput = document.getElementById("searchInput").value
const searchBtn = document.getElementById("searchBtn")
const targetScroll = document.getElementById("targetScroll")
const CO = document.querySelector(".CO")
const wrapperCatalog1 = document.querySelector("#wrapperCatalog1")
const wrapperCatalog2 = document.querySelector("#wrapperCatalog2")

const catalog1 = [
    {id:1, nama: "Nike Sabrina 2",harga:"Rp. 2.510.000,00",img:"assets/Nike Sabrina 2.png",title:"Women Basketball Shoe by Sabrina Ionesceu"},
    {id:2, nama: "Nike Immortality 4",harga:"Rp. 1.110.000,00",img:"assets/Nike Immortality 4.png",title:"Giannis Antetokounpo Budget Shoe"},
    {id:3, nama: "Nike JA 1",harga:"Rp. 1.920.000,00",img:"assets/Nike ja2.png",title:"Ja Morant Signature Shoe"},
    {id:4, nama: "Nike Kobe VII",harga:"Rp. 5.220.000,00",img:"assets/Nike Kobe IX.png",title:"Kobe Bryant Signature Shoe"},
    {id:5, nama: "Jordan Tatum 3 PF",harga:"Rp. 2.320.000,00",img:"assets/jordan Tatum 3 PF.png",title:"Jayson Tatum Signature Shoe"},
    {id:6, nama: "Nike LeBron XXII",harga:"Rp. 3.220.000,00",img:"assets/Nike LeBron XXII.png",title:"LeBron James Signature Shoe"},
    {id:7, nama: "Nike GT Cut 3",harga:"Rp. 2.510.000,00",img:"assets/Nike GT CUT 3.png",title:"The Best Unsignature Nike Basketball Shoe"}, 
]

const catalog2 = [
        {id:8, nama: "Nike GT Hustle 3",harga:"Rp. 2.390.000,00",img:"assets/Nike GT Hustle 3.png",title:"Top 5 Best Basketball Shoes in 2025, This is Nike LeBron XXI"},
        {id:9, nama: "Nike Kevin Durant 17",harga:"Rp. 2.490.000,00",img:"assets/Nike KD17.png", title:"Kevin Durant Newest Signature Shoe"},
        {id:10, nama: "Nike ReactX Rejuven8",harga:"Rp. 1.090.000,00",img:"assets/Nike ReactX Rejuven8.png", title:"The Recovery Shoe with extra soft Cushion"},
        {id:11, nama: "Nike Devin Booker 1",harga:"Rp. 2.590.000,00",img:"assets/Nike BOOK 1].png", title:"Devin Booker Signature Shoe"},
        {id:15, nama: "Jordan Tatum 3 PF",harga:"Rp. 2.191.000,00",img:"assets/jordan Tatum 3 PF.png", title:"Jayson Tatum Signature Shoe"},
        {id:16, nama: "Jordan Zion 4 PF",harga:"Rp. 2.190.000,00",img:"assets/Jordan Zion 4 PF.png",title:"Zion Williamson Signature Shoe"},
        {id:12, nama: "Nike Zoom Freak 6",harga:"Rp. 2.199.000,00",img:"assets/Nike Freak 6s.png", title:"Giannis Antetokounpo Brand New Signature Shoe"},
        {id:13, nama: "Nike GT Cut Academy",harga:"Rp. 1.350.000,00",img:"assets/GT cut Academy.png",title:"A Budget Model Shoe Of Nike GT Cut 3"},
        {id:14, nama: "Nike LeBron Witness 7",harga:"Rp. 1.790.000,00",img:"assets/Nike Lebron Witness.png",title:"A Budget Model Of LeBron James Signature Shoe"},
]

function displayCatalog1(){
    catalog1.forEach((catalog1) => {
        wrapperCatalog1.innerHTML += `
        <article>
            <img src="${catalog1.img}" alt="">
            <h1>${catalog1.nama}</h1>
            <p>${catalog1.harga}</p>
            <button class="buyBtn1">BUY NOW</button>
        </article>
`
    })
}
displayCatalog1()


function displayCatalog2(){
    catalog2.forEach((catalog2) => {
        wrapperCatalog2.innerHTML += `
        <article data-aos="fade-up">
            <img src="${catalog2.img}" alt="">
            <h1>${catalog2.nama}</h1>
            <p>${catalog2.harga}</p>
            <button class="buyBtn2">BUY NOW</button>
        </article>
`
    })
}
displayCatalog2()

const buyBtn1 = document.querySelectorAll(".buyBtn1")
buyBtn1.forEach((button, index) => {
    button.addEventListener("click", function() {
        const CO = document.querySelector(".CO")
        const idxCatalog = catalog1[index];
        CO.innerHTML = `
               <article>
            <div class="image">
                <img src="${idxCatalog.img}" alt="" id="COimg">
            </div>
            <div class="article">
                <div class="buyOption">
                    <h1 id="COname">${idxCatalog.nama}</h1>
                    <h3 id="COtitle">${idxCatalog.title}</h3>
                    <h3 id="priceTitle">Price :</h3>
                    <p id="COprice">${idxCatalog.harga}</p>
                    <h3 id="sizeTitle">Size(EUR) :</h3>
                    <div class="sizeNum">
                    <input type="radio" id="40" name="size">
                    <label for="40">40</label>
                    <input type="radio" id="41" name="size">
                    <label for="41">41</label>
                    <input type="radio" id="42" name="size">
                    <label for="42">42</label>
                    <input type="radio" id="43" name="size">
                    <label for="43">43</label>
                    <input type="radio" id="44" name="size">
                    <label for="44">44</label>
                    <input type="radio" id="45" name="size">
                    <label for="45">45</label>
                    <input type="radio" id="46" name="size">
                    <label for="46">46</label>
                </div>
                <div class="btn">
                    <button id="COorder">ORDER</button>
                    <button id="COback">BACK</button>
                </div>
                </div>
            </div>
        </article>
        `
        CO.style.display = "flex"
        document.body.style.overflow = "hidden"
        // Move the event listener for COorder here
        const COorder = document.getElementById("COorder")
        COorder.onclick = function(){
            CO.style.display = "none"
            Swal.fire({
                title: "Payment Success!",
                text: "Your Shoe will arrive in 24 Hours!",
                icon: "success"
            });
        document.body.style.overflow = "scroll"
        }

        const COback = document.getElementById("COback")
        COback.onclick = function(){
        const CO = document.querySelector(".CO")
        CO.style.display = "none"
        }
    })
})

const buyBtn2 = document.querySelectorAll(".buyBtn2")
buyBtn2.forEach((button, index) => {
    button.addEventListener("click", function() {
        const CO = document.querySelector(".CO")
        const idxCatalog = catalog2[index];
        CO.innerHTML = `
               <article>
            <div class="image">
                <img src="${idxCatalog.img}" alt="" id="COimg">
            </div>
            <div class="article">
                <div class="buyOption">
                    <h1 id="COname">${idxCatalog.nama}</h1>
                    <h3 id="COtitle">${idxCatalog.title}</h3>
                    <h3 id="priceTitle">Price :</h3>
                    <p id="COprice">${idxCatalog.harga}</p>
                    <h3 id="sizeTitle">Size(EUR) :</h3>
                    <div class="sizeNum">
                    <input type="radio" id="40" name="size">
                    <label for="40">40</label>
                    <input type="radio" id="41" name="size">
                    <label for="41">41</label>
                    <input type="radio" id="42" name="size">
                    <label for="42">42</label>
                    <input type="radio" id="43" name="size">
                    <label for="43">43</label>
                    <input type="radio" id="44" name="size">
                    <label for="44">44</label>
                    <input type="radio" id="45" name="size">
                    <label for="45">45</label>
                    <input type="radio" id="46" name="size">
                    <label for="46">46</label>
                </div>
                <div class="btn">
                    <button id="COorder">ORDER</button>
                    <button id="COback">BACK</button>
                </div>
                </div>
            </div>
        </article>
        `
        CO.style.display = "flex"

        const COorder = document.getElementById("COorder")
        COorder.onclick = function(){
            CO.style.display = "none"
            Swal.fire({
                title: "Payment Success!",
                text: "Your Shoe will arrive in 24 Hours!",
                icon: "success"
            });
        }

        const COback = document.getElementById("COback")
        COback.onclick = function(){
        const CO = document.querySelector(".CO")
        CO.style.display = "none"
        }
    })
})

scrollDwn.onclick = function(){
    window.scrollTo({ top: targetScroll.offsetTop, behavior: 'smooth' });
}

signIn.onclick = function(){
    window.location.href = "login.html"
}

searchBtn.onclick = function(){
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    console.clear();

    
    let foundItems = 0;
    
    for(let i = 0; i < catalog2.length; i++) {
        if(catalog2[i].nama.toLowerCase().includes(searchTerm)) {
            Swal.fire({
                title: "Found!",
                title: "Product " + (i+1),
                text: catalog2[i].nama,
                imageUrl: catalog2[i].img,
                imageWidth: 400,
                imageHeight: 400,
                imageAlt: "Custom image"
              });
            // console.log(`Produk #${i+1}:`);
            // console.log(`Nama: ${catalog2[i].nama}`);
            // console.log(`Gambar: ${catalog2[i].img}`);
            // console.log("-----------------------");
            foundItems++;
        }
    }
    
    if(foundItems === 0) {
        Swal.fire({
            icon: "error",
            title: "Not Found",
          });
    }
}
