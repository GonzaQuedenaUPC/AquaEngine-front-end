<template>
  <section class="container">

    <div class="invoicing-container">

      <h1 class="title">Invoice System</h1>

      <Button label="New Invoice" icon="pi pi-plus" class="p-button-success p-button-sm -mt-3 mb-3" @click="showDialog = true"/>

      <Dialog header="New Invoice" :visible.sync="showDialog" :modal="true" :closable="false">

        <div class="form flex flex-col gap-2">
          <form @submit.prevent="addInvoice">
            <div class="flex flex-col gap-3">

              <div class="">
                <InputText id="customerName" v-model="newInvoice.client" placeholder="Customer Name" required  class="w-full"/>
              </div>

              <div class="">
                <InputText id="productName" v-model="newInvoice.product" placeholder="Product Name" required class="w-full"/>
              </div>

              <div class="">
                <InputNumber id="quantity" v-model="newInvoice.quantity" :min="1" placeholder="Quantity" required class="w-full"/>
              </div>

              <div class="">
                <InputNumber id="price" v-model="newInvoice.price" mode="currency" currency="PEN" locale="es-PE" :minFractionDigits="2" placeholder="Unit Price" required class="w-full"/>
              </div>

            </div>
          </form>

          <div slot="footer" class="flex gap-3">
            <Button label="Cancel" icon="pi pi-times" @click="showDialog = false" />
            <Button label="Create Invoice" icon="pi pi-check" @click="addInvoice" />
          </div>
        </div>
      </Dialog>


      <div class="p-col-12">
        <DataTable :value="invoices" :paginator="true" :rows="5" responsiveLayout="scroll" class="p-datatable-sm">
          <Column field="id" header="ID"></Column>
          <Column field="customerName" header="Client"></Column>
          <Column field="productName" header="Product"></Column>
          <Column field="quantity" header="Quantity"></Column>
          <Column field="price" header="Price">
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

      <ConfirmDialog></ConfirmDialog>
    </div>

  </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useInvoiceService } from '../services/Invoice.service.js';
import { useToast } from 'primevue/usetoast';
import { useConfirm } from 'primevue/useconfirm';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ConfirmDialog from 'primevue/confirmdialog';
import Toast from 'primevue/toast';
import Dialog from 'primevue/dialog';

export default {
  components: {
    Card,
    InputText,
    InputNumber,
    Button,
    DataTable,
    Column,
    ConfirmDialog,
    Toast,
    Dialog
  },
  setup() {
    const invoiceService = useInvoiceService();
    const toast = useToast();
    const confirm = useConfirm();

    const invoices = ref([]);
    const newInvoice = ref({
      client: '',
      product: '',
      quantity: 1,
      price: 0
    });
    const showDialog = ref(false);

    const loadInvoices = () => {
      invoices.value = invoiceService.getInvoices();
    };

    const addInvoice = () => {
      invoiceService.addInvoice(newInvoice.value);
      toast.add({ severity: 'success', summary: 'Éxito', detail: 'Factura creada', life: 3000 });
      newInvoice.value = { client: '', product: '', quantity: 1, price: 0 };
      loadInvoices();
      showDialog.value = false;
    };

    const confirmDeleteInvoice = (invoice) => {
      confirm.require({
        message: '¿Estás seguro de que quieres eliminar esta factura?',
        header: 'Confirmación',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          invoiceService.deleteInvoice(invoice.id);
          toast.add({ severity: 'success', summary: 'Éxito', detail: 'Factura eliminada', life: 3000 });
          loadInvoices();
        }
      });
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
      newInvoice,
      addInvoice,
      confirmDeleteInvoice,
      formatCurrency,
      formatDate,
      showDialog
    };
  }
}
</script>

<style scoped>

</style>