const routes = [
    {
        path: '/',
        redirect: '/manage',
    },
    {
        name: 'manage',
        path: '/manage',
        meta: {
            title: '存款合约提现',
            permiss: '3',
        },
        component: () => import('../views/manage.vue')
    },



];

export default routes
