import {createRouter, createWebHistory} from "vue-router";
import OrderDetailComponent from "../planning/pages/order-detail.component.vue";
import OrderingMachineryComponent from "../planning/pages/ordering-machinery.component.vue";

/* Import your components here
import HomeComponent from "../public/pages/home.component.vue";
import AboutComponent from "../public/pages/about.component.vue";
import CategoryManagementComponent from "../publishing/pages/category-management.component.vue";

*/
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'OrderingMachinery', component: OrderingMachineryComponent },
        { path: 'order-detail', name: 'OrderDetail', component: OrderDetailComponent}
    ]
});

router.beforeEach((to, from, next) => {
    let baseTitle = '';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
})
export default router;
