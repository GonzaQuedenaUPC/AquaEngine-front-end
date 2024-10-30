export class Invoice {
    constructor(id, customerName, productName, quantity, price, date) {
        this.id = id;
        this.customerName = customerName;
        this.productName = productName;
        this.quantity = quantity;
        this.price = price;
        this.total = quantity * price;
        this.date = date;
    }
}