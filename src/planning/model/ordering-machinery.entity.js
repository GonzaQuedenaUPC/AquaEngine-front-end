class OrderingMachinery {
    constructor(id='', name='', units = 0, imageUrl = '' ) {
        this.id=id;
        this.name=name;
        this.units=units;
        this.imageUrl=imageUrl;
    }

    get id() {
        return this.id;
    }

    get name() {
        return this.name;
    }

    get units() {
        return this.units;
    }

    get imageUrl() {
        return this.imageUrl;
    }
}