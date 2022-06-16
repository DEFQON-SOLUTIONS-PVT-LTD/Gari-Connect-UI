import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const FeaturesConfig = {
    settings: {
        layout: {},
    },
    routes: [
        {
            path: '/features',
            component: lazy(() => import('./Features')),

        },

    ]
}
export default FeaturesConfig;