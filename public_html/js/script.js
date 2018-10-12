/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function validerInscription() {
//    var s = $('#pseudo').val()
//    alert("Inscription Valider\nBonjour : "+s);
    var s = mycarousel.getCurrentSlide();
    //document.location.href="listePartie.html";
    alert(s);
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


var slides = [
    {src: 'img/avatars/avatar_1.png'},
    {src: 'img/avatars/avatar_2.png'},
    {src: 'img/avatars/avatar_3.png'},
    {src: 'img/avatars/avatar_4.png'},
    {src: 'img/avatars/avatar_5.png'},
    {src: 'img/avatars/avatar_6.png'},
    {src: 'img/avatars/avatar_7.png'},
    {src: 'img/avatars/avatar_8.png'}
];

var mycarousel = $('.carousel').jR3DCarousel({
    // width of the carousel
    width: 200,
    // height of the carousel
    height: 300,
    // an array of images
    slides: slides,
    // contain | fill | cover
    slideLayout: 'fill',
    // perspective | default dynamic perpendicular
    perspective: 0,
    // slide | slide3D | scroll | scroll3D | fade
    animation: 'fade',
    // ease | ease-in | ease-out | ease-in-out | linear | bezier
    animationCurve: 'ease',
    // animation duration
    animationDuration: 700,
    // animation interval
    animationInterval: 2000,
    // enable autoplay
    autoplay: false,
    // display controls
    controls: true,
    slideClass: 'jR3DCarouselSlide',
    // circles | squares
    navigation: 'squares',
    // callback
    onSlideShow: function () {}
});

