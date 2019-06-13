Mini jeu

Le design pattern MVC (modèle/vue/controller) permet d'avoir une architecture plus lisible et plus facilement compréhensible de ton code.

Cela te permet de conserver un projet propre, même si sa taille augmente.

La structure que je t'ai créée n'est pas complexe, mais c'est mieux de commencer sur de bonnes bases.

VIEW
Le dossier view contient tous les éléments destinés à être affichés à l'utilisateur.
Nous y retrouvons donc le html et ls css, et un fichier js permettant de charger le controller, rien de plus.

CONTROLLER
Le dossier controller va faire la liaison entre la vue et tes entités, les éléments ici.
Ces entitées sont celles dont tu vas te servir ou manipuler.
Par exemple, si nous devions créer une application qui permet de jouer à un jeu de cartes, les entités seraient par exemple paquet.js et carte.js.

Dans mon controller, j'ai créé un fichier nommé events.js. Il est spécialement réservé pour les interactions utilisateurs.
Tu remarqueras également que j'ai créé un fichier controller.js, qui instancie (créer) un objet Map et un objet Events, afin de pouvoir les gérer simplement par la suite.

MODEL
Ici pas grand chose ne change, j'ai simplement déplacé les fichiers

Avec cette architecture, on est parti sur de bonnes bases, et si le projet tend à évoluer ou que quelqu'un veut se plonger dans le code, ça sera plus simple car les fichiers seront plus courts.

Information du jeux

Joueurs
    gerer la santé du joueur 
    Posseder une arme 
    attaquer
    defendre
    deplacer
    Image
    aleatoire

Armes
    Degats
    Types
    placement aleatoire
    Image

blocks
    placement aleatoire
    Image

Creer une carte de 10*10 cases
    dessiner une grille
    positionne des joueurs
        verifier que les joueur ne sont pas cote a cote
    positionne des armes
    position les blocks

Initialisation de la partie 
    creation de la carte 
    choix du joueur qui debute la partie 

Tour de jeux
    Joueur qui debute la partie 
    deplacement possible du joueur
        Aucun obstacle 
        deplacement de 3 cases
        changer la position du joueur 
        Dessiner le joueur a la nouvelle positionn
    gerer le cas ou le joueur recupere une arme
        Changement arme
        efface la case larme et la mettre sur le joueur
    gerer le combat a mort
        detecter quand les joueurs sont cote a cote  
        le joueur qui est arriver au corp a corp a linitiative
    si il y a combat 
        le joueur ne peut pas ce deplacer
        il peut attaquer 
            les adversaire ce voit infliger les degat de l'arme, ou la moitier si elle ce protege 
        il peut se defendre     
            la prochaine attaque subit sera reduite de moitier 
        si la vie du joueur est inferieur a 0 
            le joueur a perdu 
        si la vie de ladversaire est inferieur a 0
            le joueur a gagner     

