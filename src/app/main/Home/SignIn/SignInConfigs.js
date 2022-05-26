import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const SignInConfig={
    settings: {
        layout: {},
    },
    routes:[
        {
            path: '/SignIn',
            component: lazy(() => import('./SignIn')),

        },

    ]
}
export default SignInConfig;