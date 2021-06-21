$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function redirecionar(){
    window.open("https://www.loveflix.net/assistir-serie-manifest-1/")
}

function seguir(){
    window.open("https://pt.wikipedia.org/wiki/Manifest_(s%C3%A9rie_de_televis%C3%A3o)")
}