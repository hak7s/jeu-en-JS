# jeu-de-plateau-tour-par-tour-en-JS

Etape 2 : les mouvements
A chaque tour, un joueur peut se déplacer d’une à trois cases (horizontalement ou verticalement) avant de terminer son tour. Il ne peut évidemment pas passer à travers un obstacle.

Si un joueur passe sur une case contenant une arme, il laisse son arme actuelle sur place et la remplace par la nouvelle.


Probleme:
- afficher les déplacement du joueur
Solution:
- dessiner une zone en croix dont le personnage est le centre, qui s arrete au premier obstacle rencontré

Probleme:
- la portée peut sortir de l ecran
Solution:
- mettre une condition pour checker qu on est dans l ecran de jeu

Probleme:
- L arme qu on pose au sol disparait quand le joueur passe dessus
Solution:
- ajouter l arme qu on vient de poser au sol dans le tableau des elements, et en retirer l arme qu on vient de prendre