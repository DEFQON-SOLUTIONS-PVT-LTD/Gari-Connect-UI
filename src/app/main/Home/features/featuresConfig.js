import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const featuresConfig={
    settings: {
        layout: {},
    },
    routes:[
        {
            path: '/features',
            component: lazy(() => import('./features')),

        },

    ]
}
export default featuresConfig;