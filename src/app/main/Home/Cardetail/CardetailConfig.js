import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const CardetailConfig={
    settings: {
        layout: {},
    },
    routes:[
        {
            path: '/Cardetail',
            component: lazy(() => import('./Cardetail')),

        },

    ]
}
export default CardetailConfig;