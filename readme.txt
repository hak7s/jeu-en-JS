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