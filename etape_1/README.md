# jeu-de-plateau-tour-par-tour-en-JS

Etape 1 : génération de la carte
Commencez par générer aléatoirement la carte du jeu. Chaque case peut être soit :

Vide

Inaccessible (grisée)

Sur la carte, un nombre limité d’armes (4 maximum) sera placé aléatoirement et pourra être récolté par les joueurs qui passeraient dessus.

Vous inventerez au moins 4 types d’arme dans le jeu, avec des dégâts différents. L’arme par défaut qui équipe les joueurs doit infliger 10 points de dégâts. Chaque arme a un nom et un visuel associé.

Le placement des deux joueurs est lui aussi aléatoire sur la carte au chargement de la partie. Ils ne doivent pas se toucher (ils ne peuvent pas être côte à côte).


Probleme:
- comment garder les position des cases en memoire 
Solution:
- mettre des data sur les cases

Probleme:
- Comment trouver une position libre des le début?
Solution:
- en générerant une nouvelle position aléatoire tant que la position généré est une case occupée

Probleme:
- les joueurs peuvent etre sur la case juste a coté au début
Solution:
- générer une nouvelle position aléatoire tant que l on est a coté d un joueur