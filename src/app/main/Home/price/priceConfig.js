import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const priceConfig={
    settings: {
        layout: {},
    },
    routes:[
        {
            path: '/price',
            component: lazy(() => import('./price')),

        },

    ]
}
export default priceConfig;