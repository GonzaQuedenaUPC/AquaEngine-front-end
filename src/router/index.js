import { createRouter, createWebHistory } from "vue-router";

/* Import your components here
import AboutComponent from "../public/pages/about.component.vue";
import CategoryManagementComponent from "../publishing/pages/category-management.component.vue";
*/

import HomeViewComponent from "../public/pages/home.component.vue";
import InventoryViewComponent from '../control/pages/inventory-view.component.vue';
import MonitoringViewComponent from "../analytics/pages/monitoring-view.component.vue";
import MaintenanceViewComponent from "../analytics/pages/maintenance-view.component.vue";
import OrderingMachineryViewComponent from "../planning/pages/ordering-machinery-view.component.vue";
import OrderDetailViewComponent from "../planning/pages/order-detail-view.component.vue";

const routes = [
    { path: '/inventory', name: 'inventory', component: InventoryViewComponent, meta: { title: 'Inventory'}},
    { path:'/monitoring', name:'monitoring', component: MonitoringViewComponent, meta: {title: 'Monitoring'}},
    { path:'/ordering-machinery', mame:"ordering", component: OrderingMachineryViewComponent, meta: {title: 'Ordering Machinery'}},
    { path: '/order-details', name: 'order-details', component: OrderDetailViewComponent, meta: {title: 'Order Details'}},
    { path: '/home', name: 'home', component: HomeViewComponent, meta: { title: 'Home'}},
    { path: '/monitoring/:id/maintenance', name: 'maintenance-view', component: MaintenanceViewComponent, props: true},
    { path: '/', redirect: '/home'}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    let baseTitle = 'AquaEngine';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
});

export default router;