const targetScroll = document.getElementById("targetscroll")
const scrollDown = document.getElementById("scrollDown")
const learnMore = document.getElementById("learnMore")

scrollDown.onclick = function(){
    window.scrollTo({ top: targetScroll.offsetTop, behavior: 'smooth' });
}

learnMore.onclick = function(){
    Swal.fire({
        title: "What is the LOOPS?",
        text: "Loops is a modern online store dedicated to basketball lovers. Specializing in high-quality basketball equipment, Loops offers everything from basketball shoes, jerseys, balls, and accessories to training gear. Whether you're a beginner or a professional athlete, Loops has the right tools to support your game.One of the main features that makes Loops stand out is its Cash on Delivery (COD) service. This convenient payment option allows customers to shop confidently without the need for a credit card or online banking. Simply place your order online and pay when the product arrives at your doorstep.",
        icon: "info"
      });
}
