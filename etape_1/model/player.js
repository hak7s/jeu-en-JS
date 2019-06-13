class Player extends ElementMap {
    constructor(classCss, sante) {
        super(classCss);
        this.sante = sante;
        this.defendre = false
    }
    ajouteArme(arme) {
        this.arme = arme
    }
}