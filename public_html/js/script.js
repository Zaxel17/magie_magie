/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function validerInscription() {
    var p = $('#pseudo').val();
    var s = mycarousel.getCurrentSlide();
    var t = s.attr("id")[1];
    alert("Inscription Valider\nBonjour : "+p+" "+t);
    //console.log(s.attr("id"));
    //alert(s.attr('name'));
    document.location.href="listePartie.html";
}

function creerPartie() {
//    var s = $('#titrePartie').val()
//    alert("Partie Creer !\n"+s);
    document.location.href = "lobby.html";
}

function lancerPartie() {
    alert("Partie lancer");
    //document.location.href="jeux.html";
}


var mycarousel = $('.carousel').jR3DCarousel({
    width: 200,
    height: 300,
    slideLayout: 'fill',
    perspective: 550,
    animation: 'slide3D',
    animationCurve: 'ease',
    animationDuration: 700,
    animationInterval: 2000,
    autoplay: false,
    controls: true,
    slideClass: 'mySlide',
    navigation: 'cirles',
    onSlideShow: function () {}
});

