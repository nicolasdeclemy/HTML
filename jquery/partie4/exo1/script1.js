$(function() {
  var games = ['pierre', 'feuille', 'ciseaux'];// on déclare le tableau game avec pierre, feuille, ciseaux.
  var win = 0, lost = 0, nbGame = 0;//on déclare la variable win ou lost.

  $('#shifumi').click(function(){// le bouton s'appelle Shifumi
  nbGame++;//on incrémente le nb de la partie a chaque click.
  var ComputerGame = Math.floor(Math.random()*3+1);//math.random génère un nb entre 0 et 1.
  var Player = $('#player').val();//on récupère la valeur du selecteur.

  compare(ComputerGame, Player);//On compare ce que l'ordinateur a choisit et le joueur.
  var message = 'Le poourcentage de victoire contre l\'ordinateur est : ' + ((win /nbGame)* 100).toFixed(2) + ' %';
  $('#result').html(message);
  $('.left').html(win);
  $('.right').html(lost);
});
function compare(g1, g2){
  if (g1==g2) {
    alert('match nul, essaie encore, tu es presque arriver!!!!');
  }
  else if ((g1==1 && g2==3) || (g1==2 && g2==1) || (g1==3 && g2==2))  {
    alert('Wahou, Félicitation, tu as gagner!!!! l\'ordinateur a joué' + games[g2 - 1]);
    win++;
  }
  else {
    alert('Dommage tu as perdu, retente ta chance!!!!!');
    lost++;
  }
}
});
