import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const PickanddropConfig={
    settings: {
        layout: {},
    },
    routes:[
        {
            path: '/Pickanddrop',
            component: lazy(() => import('./Pickanddrop')),

        },

    ]
}
export default PickanddropConfig;