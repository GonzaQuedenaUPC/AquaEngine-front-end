import { createRouter, createWebHistory } from 'vue-router';
import { authenticationGuard} from "../iam/services/authentication.guard.js";

const defaultMeta = { showToolbar: true };

const routes = [
    {
        path: '/inventory',
        name: 'inventory',
        component: () => import('../control/pages/inventory-view.component.vue'),
        meta: { ...defaultMeta, title: 'Inventory' }
    },
    {
        path: '/monitoring',
        name: 'monitoring',
        component: () => import('../analytics/pages/monitoring-view.component.vue'),
        meta: { ...defaultMeta, title: 'Monitoring' }
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../public/pages/home.component.vue'),
        meta: { ...defaultMeta, title: 'Home' }
    },
    {
        path: '/maintenance',
        name: 'maintenance',
        component:()=>import ('../analytics/pages/maintenance-view.component.vue')
    },
    {
        path: '/invoicing',
        name: 'invoicing',
        component: () => import('../sales/components/invoicing.component.vue'),
        meta: { ...defaultMeta, title: 'Invoicing' }
    },
    {
        path: '/invoice-history',
        name: 'invoice-history',
        component: () => import('../sales/components/invoice-history.component.vue'),
        meta: { ...defaultMeta, title: 'Invoice History' }
    },
    {
        path: '/ordering-machinery',
        name: 'ordering-machinery',
        component: () => import('../planning/pages/ordering-machinery-view.component.vue'),
        meta: { ...defaultMeta, title: 'Ordering Machinery' }
    },
    {
        path: '/order-detail',
        name: 'order-detail',
        component: () => import('../planning/pages/order-detail-view.component.vue'),
        meta: { ...defaultMeta, title: 'Order Detail' }
    },
    {
        path: '/final-order',
        name: 'final-order',
        component: () =>import('../planning/pages/final-order-view.vue'),
        meta: { ...defaultMeta, title: 'Final Order' }
    },
    {
        path: '/sign-in',
        name: 'sign-in',
        component: () => import('../iam/pages/sign-in-view.component.vue'),
        meta: { title: 'Sign In', showToolbar: false }
    },
    {
        path: '/sign-up',
        name: 'sign-up',
        component: () => import('../iam/pages/sign-up-view.component.vue'),
        meta: { title: 'Sign Up', showToolbar: false }
    },

    { path: '/', redirect: '/sign-in' }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    // Set the page title
    const baseTitle = 'AquaEngine';
    document.title = `${baseTitle} | ${to.meta.title}`;
    // Call the authentication guard
    authenticationGuard(to, from, next);
});

export default router;