class Map {
    constructor() {
        $("#joueur1 button,#joueur2 button").hide()
        this.fight = false
        this.numberOfGreyCells = 15 // nombre de cellules grisées dans la carte
        this.numberOfLines = 10 // nombre de lignes dans la carte
        this.numberOfCells = 10 // nombre de cellules par ligne dans la carte
        this.elements = [] // élements de la cartes

        // generation de la carte "création de la carte"
        this.createMap()

        // positionnement des blocks noirs
        for (var i = 0; i < this.numberOfGreyCells; i++) {
            this.positionElement(new Black())
        }

        //creation des joueurs
        this.positionElement(new Player('player1  player armes1', 100));
        this.positionElement(new Player('player2 player armes1_1', 100));

        //creation des armes
        this.positionElement(new Arme('armes2', 15, 'Fusil'));
        this.positionElement(new Arme('armes3', 20, 'Fusil à pompe'));
        this.positionElement(new Arme('armes4', 25, 'Lance-roquette'));

        //Filtre les joueurs present dans le tableau element
        this.players = this.elements.filter(function (element) {
            return element instanceof Player
        })

        this.players[0].ajouteArme(new Arme('armes1', 10, 'Revolver', this.players[0].position))
        $('.sante-p1').html(this.players[0].sante)
        $('.arme-p1').html(this.players[0].arme.name + " " + this.players[0].arme.degat + " degats")

        this.players[1].ajouteArme(new Arme('armes1_1', 10, 'Revolver', this.players[1].position))
        $('.sante-p2').html(this.players[1].sante)
        $('.arme-p2').html(this.players[1].arme.name + " " + this.players[1].arme.degat + " degats")

        //Quel joueur debute la partie
        this.currentPlayer = Math.floor(Math.random() * this.players.length)



        //modal
        $("#info .modal-body").html("Le joueur " + (this.currentPlayer + 1) + " commence")
        $("#info").modal({
            show: true
        })
    }



    createMap() { // créer la carte et gere les actions qui peuvent etre executées sur la carte (click)
        let table = $('<table/>')
        for (let y = 0; y < this.numberOfLines; y++) {
            let tr = $('<tr/>')
            for (let x = 0; x < this.numberOfCells; x++) {
                let td = $('<td/>')

                    .data('x', x)
                    .data('y', y)
                    .click(event => {})

                tr.append(td)
            }
            table.append(tr)
        }
        $('#container').append(table)
    }

    /**
     * Fonction/Methode chargée de positionner un élément sur la carte à une position aléatoire
     */
    // position du joueur aleatoire
    positionElement(element) {
        let position = this.getRandomPosition()
        if (element instanceof Player) {
            while (this.getCellElement({
                    x: position.x,
                    y: position.y - 1,
                }, Player) != undefined || this.getCellElement({
                    x: position.x,
                    y: position.y + 1,
                }, Player) != undefined || this.getCellElement({
                    x: position.x - 1,
                    y: position.y,
                }, Player) != undefined || this.getCellElement({
                    x: position.x + 1,
                    y: position.y,
                }, Player) != undefined) {
                position = this.getRandomPosition()
            }
        }
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
        return $('table tr:nth(' + position.y + ') td:nth(' + position.x + ')') //recupere dans la table la cellule au coordonnee position.y position.x
    }

    // change de joueur et vérifie si il y a un gagnant
    getNextPlayer() {

        this.currentPlayer++
        if (this.currentPlayer >= this.players.length) {
            this.currentPlayer = 0
        }
    }
    // renvois l element avec la classe "objet" a la position spécifiée
    getCellElement(position, object) {
        return this.elements.find(function (element) {
            return element instanceof object && position.x == element.position.x && position.y == element.position.y;
        })
    }
}