class OrderingMachinery {
    constructor(id='', name='', units = 0, request = false) {
        this.id=id;
        this.name=name;
        this.request=request;
        this.units=units;
    }

    get id() {
        return this.id;
    }

    get name() {
        return this.name;
    }

    get request() {
        return this.request=true;
    }

    get units() {
        return this.units;
    }
}