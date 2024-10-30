<template>
  <div class="invoice-history-container">
    <Toast />
    <h1>Historial de Facturas</h1>

    <div class="p-grid">
      <div class="p-col-12">
        <DataTable :value="invoices" :paginator="true" :rows="10" responsiveLayout="scroll" class="p-datatable-sm">
          <Column field="id" header="ID"></Column>
          <Column field="customerName" header="Cliente"></Column>
          <Column field="productName" header="Producto"></Column>
          <Column field="quantity" header="Cantidad"></Column>
          <Column field="price" header="Precio">
            <template #body="slotProps">
              {{ formatCurrency(slotProps.data.price) }}
            </template>
          </Column>
          <Column field="total" header="Total">
            <template #body="slotProps">
              {{ formatCurrency(slotProps.data.total) }}
            </template>
          </Column>
          <Column field="date" header="Fecha">
            <template #body="slotProps">
              {{ formatDate(slotProps.data.date) }}
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useInvoiceService } from '../services/Invoice.service.js';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Toast from 'primevue/toast';

export default {
  components: {
    DataTable,
    Column,
    Toast
  },
  setup() {
    const invoiceService = useInvoiceService();
    const invoices = ref([]);

    const loadInvoices = () => {
      invoices.value = invoiceService.getInvoices();
    };

    const formatCurrency = (value) => {
      return new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN' }).format(value);
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

<style scoped>
.invoice-history-container {
  background-color: #1e1e1e;
  color: #ffffff;
  padding: 2rem;
}

h1 {
  color: #6495ED;
  margin-bottom: 2rem;
}

:deep(.p-datatable) {
  background-color: #2a2a2a;
  color: #ffffff;
}

:deep(.p-datatable .p-datatable-header) {
  background-color: #3a3a3a;
  color: #ffffff;
}

:deep(.p-datatable .p-datatable-thead > tr > th) {
  background-color: #3a3a3a;
  color: #ffffff;
}

:deep(.p-datatable .p-datatable-tbody > tr) {
  background-color: #2a2a2a;
  color: #ffffff;
}

:deep(.p-datatable .p-datatable-tbody > tr:nth-child(even)) {
  background-color: #3a3a3a;
}

:deep(.p-paginator) {
  background-color: #2a2a2a;
  color: #ffffff;
}
</style>