<script>
import { ref, onMounted } from 'vue';
import { useInvoiceService } from '../services/Invoice.service.js';

export default {
  setup() {
    const invoiceService = useInvoiceService();
    const invoices = ref([]);

    const loadInvoices = async () => {
      invoices.value = await invoiceService.getInvoices();
      console.log(invoices.value);
    };

    const formatCurrency = (value) => {
      return new Intl.NumberFormat('es-PE', {style: 'currency', currency: 'PEN'}).format(value);
    };

    const formatDate = (value) => {
      return new Date(value).toLocaleDateString('es-PE');
    };

    onMounted(() => {
      loadInvoices();
    });

    return {
      invoices,
      formatCurrency,
      formatDate
    };
  }
}
</script>

<template>
  <section class="container">
    <div class=" ">
      <h1 class="title">Invoice History</h1>

      <div class="p-grid">
        <div class="p-col-12">
          <pv-data-table :value="invoices" :paginator="true"
                         :rows="10" responsiveLayout="scroll">

            <pv-column field="id" header="ID"/>
            <pv-column field="customerName" header="Client"/>
            <pv-column field="productName" header="Product"/>
            <pv-column field="quantity" header="Quantity"/>

            <pv-column field="price" header="Price">
              <template #body="slotProps">
                {{ formatCurrency(slotProps.data.price) }}
              </template>
            </pv-column>

            <pv-column field="total" header="Total">
              <template #body="slotProps">
                {{ formatCurrency(slotProps.data.total) }}
              </template>
            </pv-column>

            <pv-column field="date" header="Date">
              <template #body="slotProps">
                {{ formatDate(slotProps.data.date) }}
              </template>
            </pv-column>

          </pv-data-table>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>