class Map {
    constructor() {
        this.numberOfGreyCells = 10 // nombre de cellules grisées dans la carte
        this.numberOfLines = 10 // nombre de lignes dans la carte
        this.numberOfCells = 10 // nombre de cellules par ligne dans la carte
        this.elements = [] // élements de la cartes

        this.createMap()
        for (var i = 0; i < this.numberOfGreyCells; i++) {
            this.positionElement(new Black())
        }

        this.positionElement(new Player('player1 player', 100))
        this.positionElement(new Player('player2 player', 100))

        this.positionElement(new Arme('armes1', 10))
        this.positionElement(new Arme('armes2', 20))
        this.positionElement(new Arme('armes3', 30))
        this.positionElement(new Arme('armes4', 40))

        this.players = this.elements.filter(function(element) {
            return element instanceof Player
        })

        this.currentPlayer = Math.floor(Math.random() * this.players.length)

        this.showRange(this.players[this.currentPlayer].position)
    }
    showRange(position) {
        for (let x = position.x - 1; x >= position.x - 3; x--) {
            if (x >= 0) {
                let cell = this.getCell({
                    x: x,
                    y: position.y,
                })
                if ($(cell).hasClass('grey') && $(cell).hasClass('player')) break
                else $(cell).css('background', 'lime')
            }
        }
       
        
    }
    /**
     * Fonction chargée de créer la carte (table / tr / td)
     */
    createMap() {
        let table = $('<table/>')
        for (let x = 1; x <= this.numberOfLines; x++) {
            let tr = $('<tr/>')
            for (let y = 1; y <= this.numberOfCells; y++) {
                let td = $('<td/>')
                    .hover(function() {}, function() {})
                    .click(function() {
                        console.log('click')
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
}
