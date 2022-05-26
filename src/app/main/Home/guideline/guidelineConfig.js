import { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const guidelineConfig = {
    settings: {
        layout: {},
    },
    routes: [
        {
            path: '/guideline',
            component: lazy(() => import('./guideline')),

        },

    ]
}
export default guidelineConfig;