import Vue from 'vue';
import VueRouter from 'vue-router';

import Formulario from '@/components/Formulario.vue';  // asumiendo que hicimos este componente
import Table from '@/components/Table.vue';  // asumiendo que hicimos este componente

import Detalle from '@/components/Pelicula/Detalle.vue'

Vue.use(VueRouter);    // instalamos explícitamente el router

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Formulario
        },
        {
            path: '/mispelis',
            component: Table,
        },
        {
            path: "/mispelis/:id",
            component: Detalle,
            props: true,


        }
    ]
})