import { Redirect } from 'react-router-dom';
import Documents from './Documents';

const DocumentsConfig={
    settings: {
        layout: {},
    },
    routes:[
        {
            path: '/Documents',
            component: Documents,

        },

    ]
}
export default DocumentsConfig;