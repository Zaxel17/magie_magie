$(document).ready(function() {	

function afficherCartesJoueurAdverse(id,nombre_de_cartes,topInit,leftInit) {
	degree = 360;
    for(i=0;i<nombre_de_cartes;i++) { 
	  degRotate = degree-90;
      $('.joueur_adverse_'+id+' li:eq('+i+')').css("transform","rotate("+degRotate+"deg)");
	/*  $('.joueur_adverse_'+id+' li:eq('+i+')').css("-moz-transform","rotate("+degRotate+"deg)");
	  $('.joueur_adverse_'+id+' li:eq('+i+')').css("-webkit-transform","rotate("+degRotate+"deg)");
	  $('.joueur_adverse_'+id+' li:eq('+i+')').css("-o-transform","rotate("+degRotate+"deg)");	*/
	  rad  = degree/57.2;
      posX = Math.round((Math.cos(rad)*130)+leftInit);
      posY = Math.round((Math.sin(rad)*130)+topInit);
      $('.joueur_adverse_'+id+' li:eq('+i+')').css("top",posY+"px");
      $('.joueur_adverse_'+id+' li:eq('+i+')').css("left",posX+"px");
      degree = degree + Math.round(200/nombre_de_cartes);
    }
}

/* Joueur Adverse 1 */	
	afficherCartesJoueurAdverse(1,5,120,160); 
	
/* Joueur Adverse 2 */
	afficherCartesJoueurAdverse(2,8,120,575); 
	
/* Joueur Adverse 3 */
	afficherCartesJoueurAdverse(3,10,120,990); 

/* Joueur Adverse 4 */
	afficherCartesJoueurAdverse(4,20,120,1405); 
	
/* Cartes du Joueur  */	
    var nombre_de_cartes = 20;
    var degree = 65; 
    var topInit = 1650;
    var leftInit = 840;

    for(i=0;i<nombre_de_cartes;i++) {
	  degRotate = degree-90;
      $('.cartes_joueur li:eq('+i+')').css("transform","rotate("+degRotate+"deg)");
	  $('.cartes_joueur li:eq('+i+')').css("-moz-transform","rotate("+degRotate+"deg)");
	  $('.cartes_joueur li:eq('+i+')').css("-webkit-transform","rotate("+degRotate+"deg)");
	  $('.cartes_joueur li:eq('+i+')').css("-o-transform","rotate("+degRotate+"deg)");
	  rad  = degree/57.2;
      posX = Math.round(leftInit-(Math.cos(rad)*900));
      posY = Math.round(topInit-(Math.sin(rad)*900));
      $('.cartes_joueur li:eq('+i+')').css("top",posY+"px");
      $('.cartes_joueur li:eq('+i+')').css("left",posX+"px");
      degree = degree + Math.round(60/nombre_de_cartes);
    }

    
    /*
    
        // TEST **************************************************
	var test = '';
	test  += i+' ==>>> Degrée='+degree+'° / Gauche posX='+posX+' / TOP posY='+posY+'<br/>';
    // document.getElementById('test').innerHTML = "<br />" + test;
    // FIN TEST ********************************************** 
    */

    
    
    
});	


