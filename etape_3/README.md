# jeu-de-plateau-tour-par-tour-en-JS

Etape 3 : le combat !
Si les joueurs se croisent sur des cases adjacentes (horizontalement ou verticalement), un combat à mort s’engage.

Lors d'un combat, le fonctionnement du jeu est le suivant :

Chacun attaque à son tour

Les dégâts infligés dépendent de l’arme possédée par le joueur

Le joueur peut choisir d’attaquer ou de se défendre contre le prochain coup

Lorsque le joueur se défend, il encaisse 50% de dégâts en moins qu’en temps normal

Dès que les points de vie d’un joueur (initialement à 100) tombent à 0 , celui-ci a perdu. Un message s’affiche et la partie est terminée.


Probleme:
- Savoir dans chaque fonction quel joueur joue et ne joue pas
Solution:
- d afficher uniquement les boutons du joueur courrant

Probleme:
- Faire en sorte que le joueur qui agresse un autre puisse attaquer en premier
Solution:
-  probleme gérer en mettant une condition sur le changement de tour apres un déplacement.