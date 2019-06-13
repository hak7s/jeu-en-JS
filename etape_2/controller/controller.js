class Controller {
    constructor() {
        this.loadMap()
        this.loadEvents()
    }

    loadMap() {
        this.map = new Map()
    }

    loadEvents() {
        this.events = new Events()
    }
}