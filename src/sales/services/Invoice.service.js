import { ref } from 'vue';
import { Invoice } from '../models/Invoice.entity.js';

export const useInvoiceService = () => {
    const invoices = ref([]);

    const getInvoices = () => {
        return invoices.value;
    };

    const addInvoice = (invoice) => {
        invoice.id = Date.now();
        invoice.date = new Date().toISOString();
        invoices.value.push(new Invoice(
            invoice.id,
            invoice.customerName,
            invoice.productName,
            invoice.quantity,
            invoice.price,
            invoice.date
        ));
    };

    const deleteInvoice = (id) => {
        const index = invoices.value.findIndex(inv => inv.id === id);
        if (index !== -1) {
            invoices.value.splice(index, 1);
        }
    };

    return {
        getInvoices,
        addInvoice,
        deleteInvoice
    };
};