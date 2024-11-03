import { createRouter, createWebHistory } from "vue-router";

import HomeViewComponent from "../public/pages/home.component.vue";
import InventoryViewComponent from "../control/pages/inventory-view.component.vue";
import MonitoringViewComponent from "../analytics/pages/monitoring-view.component.vue";
import MaintenanceViewComponent from "../analytics/pages/maintenance-view.component.vue";
import InvoicingViewComponent from "../sales/components/invoicing.component.vue";
import InvoiceHistoryViewComponent from "../sales/components/invoice-history.component.vue";
import OrderingMachineryViewComponent from "../planning/pages/ordering-machinery-view.component.vue";
import OrderDetailViewComponent from "../planning/pages/order-detail-view.component.vue";

const routes = [
    { path: '/inventory', name: 'inventory', component: InventoryViewComponent, meta: { title: 'Inventario' }},
    { path: '/monitoring', name: 'monitoring', component: MonitoringViewComponent, meta: { title: 'Monitoreo' }},
    { path: '/home', name: 'home', component: HomeViewComponent, meta: { title: 'Inicio' }},
    { path: '/monitoring/:id/maintenance', name: 'maintenance-view', component: MaintenanceViewComponent, props: true },
    { path: '/invoicing', name: 'invoicing', component: InvoicingViewComponent, meta: { title: 'Facturación' }},
    { path: '/invoice-history', name: 'invoice-history', component: InvoiceHistoryViewComponent, meta: { title: 'Historial de Facturas' }},
    { path: '/ordering-machinery', name:'ordering-machinery', component: OrderingMachineryViewComponent, meta: { title: 'Orden de Maquinaria' }},
    { path: '/orden-detail', name: 'orden-detail',  component: OrderDetailViewComponent, meta: { title: 'Detalle de orden'}},
    { path: '/', redirect: '/home' }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    let baseTitle = 'AquaEngine';
    document.title = `${baseTitle} | ${to.meta.title}`;
    next();
});

export default router;