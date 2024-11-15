class Product {

    constructor({id='', name='', quantityPerUnit='',
                    unitPrice='', quantity=0, userId=0}) {

        this._id = id;
        this._name = name;
        this._quantityPerUnit = quantityPerUnit;
        this._unitPrice = unitPrice;
        this._quantity = quantity;
        this._userId = userId;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get quantityPerUnit() {
        return this._quantityPerUnit;
    }

    get unitPrice() {
        return this._unitPrice;
    }

    get quantity() {
        return this._quantity;
    }

    get userId() {
        return this._userId;
    }
}

export default Product;