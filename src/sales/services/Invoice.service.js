import http from "../../shared/http-common.js";
import { ref } from 'vue';
import { Invoice } from '../models/Invoice.entity.js';

export const useInvoiceService = () => {
    const invoices = ref([]);

    const getInvoices = async () => {
        try {
            const response = await http.get('/invoice');
            invoices.value = response.data.map(invoice => new Invoice(
                invoice.id,
                invoice.client,
                invoice.product,
                invoice.quantity,
                invoice.price,
                invoice.date
            ));
            return invoices.value;
        } catch (error) {
            console.error('Error fetching invoices:', error);
            throw error;
        }
    };

    const addInvoice = async (invoice) => {
        try {
            const response = await http.post('/invoice', invoice);
            const newInvoice = new Invoice(
                response.data.id,
                response.data.client,
                response.data.product,
                response.data.quantity,
                response.data.price,
                response.data.date
            );
            invoices.value.push(newInvoice);
            return newInvoice;
        } catch (error) {
            console.error('Error adding invoice:', error);
            throw error;
        }
    };



    return {
        getInvoices,
        addInvoice,

    };
};