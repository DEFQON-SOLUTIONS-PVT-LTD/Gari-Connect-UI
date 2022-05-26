import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const imageConfig={
    settings: {
        layout: {},
    },
    routes:[
        {
            path: '/image',
            component: lazy(() => import('./image')),

        },

    ]
}
export default imageConfig;