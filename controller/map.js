class Map {
    constructor() {
        this.numberOfGreyCells = 10 // nombre de cellules grisées dans la carte
        this.numberOfLines = 10 // nombre de lignes dans la carte
        this.numberOfCells = 10 // nombre de cellules par ligne dans la carte
        this.elements = [] // élements de la cartes

        this.createMap() // création de la carte
        for (var i = 0; i < this.numberOfGreyCells; i++) {
            this.positionElement(new Black()) // positionnement des blocks noirs
        }

        this.positionElement(new Player('player1 player', 100))
        this.positionElement(new Player('player2 player', 100))

        this.positionElement(new Arme('armes1', 10))
        this.positionElement(new Arme('armes2', 20))
        this.positionElement(new Arme('armes3', 30))
        this.positionElement(new Arme('armes4', 40))

        this.players = this.elements.filter(function (element) {
            return element instanceof Player
        })

        this.currentPlayer = Math.floor(Math.random() * this.players.length)

        this.showRange(this.players[this.currentPlayer].position) // on affiche dès le début la portée des déplacements du joueur

        // pour ca il nous faut la position du joueur
     
    }

    /*
    Cette fonction showRange(position) permet d affiche la portée des déplacements d un joueur
    */
    showRange(position) {
        let moves= this.getMoves(position);
        moves.forEach (move => {
            this.getCell(move).addClass("green");
        }); 
      
    }
    
    /**
     * Fonction chargée de créer la carte (table / tr / td)
     */
    createMap() {
        let table = $('<table/>')
        for (let y = 0; y < this.numberOfLines; y++) {
            let tr = $('<tr/>')
            for (let x = 0; x < this.numberOfCells; x++) {
                let td = $('<td/>')
                    .data('x',x)
                    .data('y',y)
                    .hover(function () {}, function () {})
                    .click(event => { // fonction fléchée pour ne pas redéfinir la variable this
                        // on récupère la celulle cliquée avec event.target
						let x = $(event.target).data('x'); 
                        let y = $(event.target).data('y');
						
						// récupères les déplacements possible
                        let moves = this.getMoves(this.players[this.currentPlayer].position);
						
						// moves.some permet de vérifer si la celulle cliquée fait parties des déplacements possibles
						if (moves.some(move => { return move.x === x && move.y === y})) {
							console.log('Le déplacement est possible !');
							console.log("Plus qu'a faire le code pour déplacer le joueur !");
						}
                    })

                tr.append(td)
            }
            table.append(tr)
        }

        $('#container').append(table)
    }
    /**
     * Fonction/Methode chargée de positionner un élément sur la carte à une position aléatoire
     */
    positionElement(element) {
        let position = this.getRandomPosition()
        element.position = position
        this.elements.push(element)

        let cell = this.getCell(position)
        cell.addClass(element.classCss) // ajouter la class(css) className à la cellule
    }

    /**
     * Retourner les coordonnées d'une cellule vide
     */

    getRandomPosition() {
        let randomX = Math.floor(Math.random() * this.numberOfCells) // Calculer une valeur aléatoire entre 0 et this.numberOfCells (exclu)
        let randomY = Math.floor(Math.random() * this.numberOfLines) // Calculer une valeur aléatoire entre 0 et this.numberOfLines (exclu)

        if (this.cellHasElement(randomX, randomY)) {
            return this.getRandomPosition()
        }

        return {
            x: randomX,
            y: randomY,
        }
    }
    /**
     *	Vérifie si une cellule contient un élément ou non
     */
    // doit parcourir les elements présent dans le tableau et vérifier si un autre élément se trouve au coordonnée indiquée
    cellHasElement(X, Y) {
        for (let i = 0; i < this.elements.length; i++) {
            if (
                this.elements[i].position.x === X &&
                this.elements[i].position.y === Y
            ) {
                return true
            }
        }
        return false
    }
// retourne une cellule a partir d'une position 
    getCell(position) {
        return $('table tr:nth(' + position.y + ') td:nth(' + position.x + ')')
    }

    getNextPlayer() {
        this.currentPlayer++
        if (this.currentPlayer >= this.players.length) {
            this.currentPlayer = 0
        }
        this.showRange(this.players[this.currentPlayer].position)
    }
// fonction sur lequel le joueur peut se deplacer
    getMoves(position){
        let moves = [];
        for (let x = position.x - 1; x >= position.x - 3; x--) {
            if (x >= 0) { // si on ne sort pas du plateau de jeu
                let cell = this.getCell({
                    x: x,
                    y: position.y,
                }) // on recupe la cellule qu on analyse
                if ($(cell).hasClass('grey') || $(cell).hasClass('player')) break // si la case est occupée, pas besoin de checker les cases plus a gauche: le joueur est bloqué ici, on sort donc du for
                else moves.push({
                    x: x,
                    y: position.y,
                })
            }
        }

        for (let y = position.y - 1; y >= position.y - 3; y--) {
            if ( y >= 0) { // si on ne sort pas du plateau de jeu
                    let cell = this.getCell({
                        x: position.x,
                        y: y,
                    }) // on recupe la cellule qu on analyse
                if ($(cell).hasClass('grey') || $(cell).hasClass('player')) break // si la case est occupée, pas besoin de checker les cases plus a gauche: le joueur est bloqué ici, on sort donc du for
                else moves.push({
                    x: position.x,
                    y: y,
                })
            }
        }
        for (let x = position.x + 1; x <= position.x + 3; x++) {
            if (x < this.numberOfCells) { // si on ne sort pas du plateau de jeu
                let cell = this.getCell({
                    x: x,
                    y: position.y,
                }) // on recupe la cellule qu on analyse
                if ($(cell).hasClass('grey') || $(cell).hasClass('player')) break // si la case est occupée, pas besoin de checker les cases plus a gauche: le joueur est bloqué ici, on sort donc du for
                else moves.push({
                    x: x,
                    y: position.y,
                })
            }
        }
        for (let y = position.y + 1; y <= position.y + 3; y++) {
            if ( y < this.numberOfLines) { // si on ne sort pas du plateau de jeu
                    let cell = this.getCell({
                        x: position.x,
                        y: y,
                    }) // on recupe la cellule qu on analyse
                if ($(cell).hasClass('grey') || $(cell).hasClass('player')) break // si la case est occupée, pas besoin de checker les cases plus a gauche: le joueur est bloqué ici, on sort donc du for
                else moves.push({
                    x: position.x,
                    y: y,
                })
            }
        }
        return moves;
    }
}
