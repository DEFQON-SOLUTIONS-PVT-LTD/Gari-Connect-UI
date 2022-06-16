import { lazy } from 'react';

const ListStepperConfig={
    settings: {
        layout: {},
    },
    routes:[
        {
            path: '/ListStepper',
            component: lazy(() => import('./ListStepper')),

        },

    ]
}
export default ListStepperConfig;