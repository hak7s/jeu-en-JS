class Events {
    constructor() {
        let self = this
        $(document).on('keypress', function (e) {
            switch (e.which) {
                case 122:
                    self.move('haut')
                    break
                case 113:
                    self.move('gauche')
                    break
                case 115:
                    self.move('bas')
                    break
                case 100:
                    self.move('droite')
                    break
            }
        })
    }

    move(direction) {
        console.log(direction);

    }
}