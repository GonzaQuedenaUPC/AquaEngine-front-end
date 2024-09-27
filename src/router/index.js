
import {createRouter, createWebHistory} from "vue-router";

/* Import your components here
import HomeComponent from "../public/pages/home.component.vue";
import AboutComponent from "../public/pages/about.component.vue";
import CategoryManagementComponent from "../publishing/pages/category-management.component.vue";
*/

import InventoryViewComponent from '../control/pages/inventory-view.component.vue';

const routes = [
    { path: '/inventory', name: 'inventory', component: InventoryViewComponent, meta: { title: 'Inventory'}},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    let baseTitle = 'AquaEngine';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
})

export default router;
