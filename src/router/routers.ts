const routes = [
    {
        path: '/',
        redirect: '/adminpayout',
    },
    {
        name: 'adminpayout',
        path: '/adminpayout',
        meta: {
            title: '存款合约提现',
            permiss: '3',
        },
        component: () => import('../views/adminpayout.vue')
    },
    {
        name: 'adminpayout2',
        path: '/adminpayout2',
        meta: {
            title: '收款合约提现',
            permiss: '3',
        },
        component: () => import('../views/adminpayout2.vue')
    },


];

export default routes
