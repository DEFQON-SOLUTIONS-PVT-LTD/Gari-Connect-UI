import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const availabilityConfig={
    settings: {
        layout: {},
    },
    routes:[
        {
            path: '/availability',
            component: lazy(() => import('./availability')),

        },

    ]
}
export default availabilityConfig;