$(document).ready(function() {

let slideAtual = 1
let listaSlides = ["banner-console", "banner-homem", "banner-jogo"]

setInterval(mudarSlide, 2000)

function mudarSlide() {
    //remover o slide anterior//
    if (slideAtual > 0) {
        $("#carrossel").removeClass(listaSlides[slideAtual - 1])   
    } else {
        $("#carrossel").removeClass(listaSlides[2])
    }

    //exibir o slide atual//
    $("#carrossel").addClass(listaSlides[slideAtual])

    //Indicar qual slide atual//
    console.log("Slide atual é:", slideAtual)

    slideAtual++

    if (slideAtual > 2) {
        slideAtual = 0
    }
}   


})





function gerarDesconto() {
    alert("GAMEMANIA15")
}

function mostrarMenu() {
    //identificar o elemento Menu
    let menu = document.getElementById("menu")

    //mudar visualização do Menu
    if(getComputedStyle(menu).display == "none") {
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    }
    
}

$('.thumbnail').click(function(){
	$('.modal-body').empty();
	$($(this).parents('div').html()).appendTo('.modal-body');
	$('#modal').modal({show:true});
});

$('#modal').on('show.bs.modal', function () {
   $('.col-6,.row .thumbnail').addClass('blur');
})

$('#modal').on('hide.bs.modal', function () {
   $('.col-6,.row .thumbnail').removeClass('blur');
})
