import VueRouter from 'vue-router';
import authGuard from './authGuard'
import mainContent  from '@/components/mainContent';
import catalog from '@/components/catalog';
import form from '@/components/form';
import product from '@/components/product';
import cart from '@/components/cart';
import register from '@/components/register';
import login from '@/components/login';

export default new VueRouter ({
    routes : [
        {
            path: '/',
            component: mainContent,
        },
        {
            path: '/catalog',
            component: catalog,
            name : 'catalog',
        },
        {
            path: '/form',
            component: form,
            beforeEnter : authGuard,
        },
        {
            path : '/product/:id',
            props : true,
            component : product,
        },
        {
            path : '/cart',
            component : cart,
            beforeEnter : authGuard,
        },
        {
            path : '/register',
            component : register,
        },
        {
            path : '/login',
            component : login,
        },
    ],
    mode : 'history'
});