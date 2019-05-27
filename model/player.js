class Player extends ElementMap {
    constructor (classCss, sante) {
        super(classCss);
        this.sante = sante;
    }
    ajouteArme(arme){
        this.arme=arme
    }
}