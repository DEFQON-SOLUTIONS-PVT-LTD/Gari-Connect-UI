import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const PersonaldetailsConfig={
    settings: {
        layout: {},
    },
    routes:[
        {
            path: '/Personaldetails',
            component: lazy(() => import('./Personaldetails')),

        },

    ]
}
export default PersonaldetailsConfig;