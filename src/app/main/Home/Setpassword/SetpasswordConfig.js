import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const SetpasswordConfig={
    settings: {
        layout: {},
    },
    routes:[
        {
            path: '/Setpassword',
            component: lazy(() => import('./Setpassword')),

        },

    ]
}
export default SetpasswordConfig;