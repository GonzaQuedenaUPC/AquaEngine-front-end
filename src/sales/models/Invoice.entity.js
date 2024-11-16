export class Invoice {
    constructor(id, client, product, quantity, price, date) {
        this.id = id;
        this.client = client;
        this.product = product;
        this.quantity = quantity;
        this.price = price;
        this.total = quantity * price;
        this.date = date;
    }
}