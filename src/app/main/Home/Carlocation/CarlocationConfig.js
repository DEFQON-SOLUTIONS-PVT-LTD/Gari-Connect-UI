import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const CarlocationConfig={
    settings: {
        layout: {},
    },
    routes:[
        {
            path: '/Carlocation',
            component: lazy(() => import('./Carlocation')),

        },

    ]
}
export default CarlocationConfig;