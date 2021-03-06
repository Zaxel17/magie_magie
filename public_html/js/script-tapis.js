$(document).ready(function() {	

var test = '';

var jeuHTML = ''; /* toute la construction HTML du jeu */
var avatars_joueurs = [1,3,5,8,2]; /* les avatars pour chaques joueurs */
var cartes_joueur = []; /* contient les cartes de chaque joueur */
var noms_joueur = ['PAULETTE','CRAPAUD','TOTOCHE','DUDULE','BILOUTE']; /* contient les noms de chaque joueur */  

    /* pour le test, remplissage pour 5 joueurs */  
    cartes_joueur[0]=[1,1,1,2,2,2,2]; 
    cartes_joueur[1]=[1,1,1,2,2,2,2]; 
    cartes_joueur[2]=[1,1,1,2,2,2,2]; 
    cartes_joueur[3]=[1,1,1,2,2,2,2]; 
    cartes_joueur[4]=[1,1,1,2,2,2,5];
    /* états des 5 sorts disponnible renvoyé aprés analyse du jeu */
    var sortsDisponible = [true,false,true,true,false]; 
    
var nombre_de_joueurs = 5; /* cartes_joueur.length;  nombre de joueur minimum = 2 */

/* Joueur Adverse */
if      (nombre_de_joueurs===3) { posLeft = 521; posLeftIncrementation = 521; }
else if (nombre_de_joueurs===4) { posLeft = 300; posLeftIncrementation = 482; }
else if (nombre_de_joueurs===5) { posLeft = 160; posLeftIncrementation = 415; }
else { posLeft = 782; posLeftIncrementation = 0; } // 2 joueurs


/* Placement de la pioche */
jeuHTML += '<div id="pioche" class="taille_carte_normal position_pioche"></div>';
 
/* JOUEUR PRINCIPAL */
jeuHTML += '<div class="avatar_'+avatars_joueurs[0]+' avatar_joueur"></div><div class="nom_joueur">'+noms_joueur[0]+'</div><ul class="cartes_joueur">';
for(cj=0;cj<cartes_joueur[0].length;cj++) { jeuHTML += '<li><div class="carte_'+cartes_joueur[0][cj]+' taille_carte_normal"></div></li>'; }
jeuHTML += '</ul>';
                
/* POUR LES JOUEURS ADVERSES */
for(jadv=1;jadv<nombre_de_joueurs;jadv++) {
jeuHTML += '<ul class="cartes_joueur_adverse joueur_adverse_'+jadv+'">';
for(cja=0;cja<cartes_joueur[jadv].length;cja++) { jeuHTML += '<li><div class="carte_dos"></div></li>'; }
jeuHTML += '</ul><div class="avatar_'+avatars_joueurs[jadv]+' avatar_joueur_adverse" id="joueur_'+jadv+'"></div><div class="nom_joueur_adverse" id="nom_joueur_'+jadv+'">'+noms_joueur[jadv]+'</div>';
}       

/* AFFICHAGE DES TABLES INITIALE */
document.getElementById('jeu').innerHTML = jeuHTML; 

/* AVATARS DES JOEURS ADVERSES */
    poseLeftAv=posLeft;
for(j=1;j<nombre_de_joueurs;j++) {
     $('#joueur_'+j).css("left",(poseLeftAv-30)+"px"); /* AVATARS */
     $('#nom_joueur_'+j).css("left",(poseLeftAv-55)+"px"); /* NOM DU JOUEUR */
     poseLeftAv = poseLeftAv + posLeftIncrementation;
}
        
// Mise en éventails des cartes */
function afficherCartesEnEventaille(idHTML,nombre_de_cartes,rayon,radInit,limitRad,leftInit,topInit) {
    var rad = radInit;
    
    function mettreUneCarteEnEventail(i) {
        if (i > nombre_de_cartes) {
            return;
        }
        var posX = Math.round((Math.cos(rad)*rayon)+leftInit);
        var posY = Math.round((Math.sin(rad)*rayon)+topInit);      
        $('.'+idHTML+' li:eq('+i+')').css("transform","translate("+posX+"px,"+posY+"px) rotate("+(rad+1)+"rad)"); 
        $('.'+idHTML+' li:eq('+i+')').css("-moz-transform","translate("+posX+"px,"+posY+"px) rotate("+(rad+1)+"rad)");
        $('.'+idHTML+' li:eq('+i+')').css("-webkit-transform","translate("+posX+"px,"+posY+"px) rotate("+(rad+1)+"rad)");
	$('.'+idHTML+' li:eq('+i+')').css("-o-transform","translate("+posX+"px,"+posY+"px) rotate("+(rad+1)+"rad)");
        $('.'+idHTML+' li:eq('+i+')').css("transition","all .3s ease");
        rad = rad + (limitRad/nombre_de_cartes);
        setTimeout(function() {
            mettreUneCarteEnEventail(i+1);
        }, 100);
    }
    mettreUneCarteEnEventail(0);
}

/* Cartes du Joueur */	
afficherCartesEnEventaille('cartes_joueur',cartes_joueur[0].length,600,16.6,1.5,-340,860); 
        
/* Joueur Adverse */
posLeftJA = posLeft-1200-posLeftIncrementation;
function afficherJeuxJoueursAdverses(j) {
        if (j > nombre_de_joueurs) {
            return;
        }     
     afficherCartesEnEventaille('joueur_adverse_'+j,cartes_joueur[j].length,130,12.2,4,posLeftJA,-320);
     posLeftJA+= posLeftIncrementation;
     setTimeout(function() {
            afficherJeuxJoueursAdverses(j+1);
        }, 800);
    }
    
    afficherJeuxJoueursAdverses(0);


/* MASQUES SUR LES COMBINAISONS DE SORT
    0 = sort_invisibilite
    1 = sort_philtre
    2 = sort_hypnose
    3 = sort_divination
    4 = sort_sommeil
*/
for(sort=0;sort<5;sort++) {
    if (sortsDisponible[sort]===true) { 
        $('#sort_'+sort).css("border-color","#FF5700");
        $('#sort_'+sort).css("border-size","5px");
        $('#sort_'+sort).css("border-style","solid");
        $('#sort_'+sort).css("border-radius","10px");
        $('#sort_'+sort).css("background-color","#FF5700");
        $('#sort_'+sort+' span').attr("title","Sort disponible, Cliquez pour l'utiliser"); } 
    else { 
        $('#sort_'+sort+' span').css("opacity",".50");
        $('#sort_'+sort+' span').attr("title","Sort indisponible"); }
}                            

    /*
    
        // TEST **************************************************
	test  += j+' ==>>> posLeft='+posLeft+' <br/>';
	test  += i+' ==>>> Degrée='+degree+'° / Gauche posX='+posX+' / TOP posY='+posY+'<br/>';
    
    // FIN TEST ********************************************** 
    */

   
     
    document.getElementById('test').innerHTML = "<br />" + test;    
    
});	


