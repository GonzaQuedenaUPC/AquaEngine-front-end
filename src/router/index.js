import { createRouter, createWebHistory } from 'vue-router';

//definir metas comunes
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
        path: '/monitoring/:id/maintenance',
        name: 'maintenance-view',
        component: () => import('../analytics/pages/maintenance-view.component.vue'),
        props: true,
        meta: { showToolbar: true, title: 'Maintenance' }
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
        path: '/orden-detail',
        name: 'orden-detail',
        component: () => import('../planning/pages/order-detail-view.component.vue'),
        meta: { ...defaultMeta, title: 'Order Detail' }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../iam/pages/login-view.component.vue'),
        meta: { title: 'Sign In', showToolbar: false }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../iam/pages/register-view.component.vue'),
        meta: { title: 'Sign Up', showToolbar: false }
    },

    { path: '/', redirect: '/login' }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const baseTitle = 'AquaEngine';
    document.title = `${baseTitle} | ${to.meta.title}`;
    next();
});

export default router;