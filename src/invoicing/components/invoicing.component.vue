<template>
  <div class="invoicing-container">
    <Toast />
    <h1>Sistema de Facturación</h1>

    <div class="p-grid">
      <div class="p-col-12">
        <Card class="invoicing-card">
          <template #title>
            <h2>Nueva Factura</h2>
          </template>
          <template #content>
            <form @submit.prevent="addInvoice">
              <div class="p-fluid p-formgrid p-grid">
                <div class="p-field p-col-12 p-md-6">
                  <label for="customerName" class="p-d-block">Nombre del Cliente</label>
                  <InputText id="customerName" v-model="newInvoice.customerName" required class="p-inputtext-sm" />
                </div>
                <div class="p-field p-col-12 p-md-6">
                  <label for="productName" class="p-d-block">Nombre del Producto</label>
                  <InputText id="productName" v-model="newInvoice.productName" required class="p-inputtext-sm" />
                </div>
                <div class="p-field p-col-12 p-md-6">
                  <label for="quantity" class="p-d-block">Cantidad</label>
                  <InputNumber id="quantity" v-model="newInvoice.quantity" :min="1" required class="p-inputtext-sm" />
                </div>
                <div class="p-field p-col-12 p-md-6">
                  <label for="price" class="p-d-block">Precio Unitario</label>
                  <InputNumber id="price" v-model="newInvoice.price" mode="currency" currency="PEN" locale="es-PE" :minFractionDigits="2" required class="p-inputtext-sm" />
                </div>
                <div class="p-col-12">
                  <Button type="submit" label="Crear Factura" class="p-button-sm" />
                </div>
              </div>
            </form>
          </template>
        </Card>
      </div>

      <div class="p-col-12">
        <DataTable :value="invoices" :paginator="true" :rows="5" responsiveLayout="scroll" class="p-datatable-sm">
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
          <Column :exportable="false" style="min-width:8rem">
            <template #body="slotProps">
              <Button icon="pi pi-trash" class="p-button-rounded p-button-warning p-button-sm" @click="confirmDeleteInvoice(slotProps.data)" />
            </template>
          </Column>
        </DataTable>
      </div>
    </div>

    <ConfirmDialog></ConfirmDialog>
  </div>
</template>

<script>
import {ref, onMounted} from 'vue';
import {useInvoiceService} from '../services/Invoice.service.js';
import {useToast} from 'primevue/usetoast';
import {useConfirm} from 'primevue/useconfirm';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ConfirmDialog from 'primevue/confirmdialog';
import Toast from 'primevue/toast';

export default {
  components: {
    Card,
    InputText,
    InputNumber,
    Button,
    DataTable,
    Column,
    ConfirmDialog,
    Toast
  },
  setup() {
    const invoiceService = useInvoiceService();
    const toast = useToast();
    const confirm = useConfirm();

    const invoices = ref([]);
    const newInvoice = ref({
      customerName: '',
      productName: '',
      quantity: 1,
      price: 0
    });

    const loadInvoices = () => {
      invoices.value = invoiceService.getInvoices();
    };

    const addInvoice = () => {
      invoiceService.addInvoice(newInvoice.value);
      toast.add({severity: 'success', summary: 'Éxito', detail: 'Factura creada', life: 3000});
      newInvoice.value = {
        customerName: '',
        productName: '',
        quantity: 1,
        price: 0
      };
      loadInvoices();
    };

    const confirmDeleteInvoice = (invoice) => {
      confirm.require({
        message: '¿Estás seguro de que quieres eliminar esta factura?',
        header: 'Confirmación',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          invoiceService.deleteInvoice(invoice.id);
          toast.add({severity: 'success', summary: 'Éxito', detail: 'Factura eliminada', life: 3000});
          loadInvoices();
        }
      });
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
      newInvoice,
      addInvoice,
      confirmDeleteInvoice,
      formatCurrency,
      formatDate
    };
  }
}
</script>

<style scoped>
.invoicing-container {
  background-color: #1e1e1e;
  color: #ffffff;
  padding: 2rem;
}

h1 {
  color: #6495ED;
  margin-bottom: 2rem;
}

h2 {
  color: #6495ED;
  margin-bottom: 1rem;
}

.invoicing-card {
  background-color: #2a2a2a;
  color: #ffffff;
  margin-bottom: 2rem;
}

:deep(.p-card) {
  background-color: #2a2a2a;
  color: #ffffff;
}

:deep(.p-card .p-card-title) {
  color: #6495ED;
}

:deep(.p-inputtext),
:deep(.p-inputnumber-input) {
  background-color: #3a3a3a;
  color: #ffffff;
  border-color: #6495ED;
  width: 80%;
}

:deep(.p-inputnumber) {
  width: 20%;
}

:deep(.p-button) {
  background-color: #6495ED;
  border-color: #6495ED;
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

:deep(.p-confirm-dialog) {
  background-color: #2a2a2a;
  color: #ffffff;
}

:deep(.p-dialog-title) {
  color: #6495ED;
}

:deep(.p-dialog-content) {
  background-color: #2a2a2a;
  color: #ffffff;
}

:deep(.p-dialog-footer) {
  background-color: #2a2a2a;
}

.p-field {
  margin-bottom: 1rem;
}

.p-field label {
  margin-bottom: 0.5rem;
  display: block;
}

.p-inputtext-sm {
  font-size: 0.875rem;
  padding: 0.4rem 0.5rem;
}
</style>