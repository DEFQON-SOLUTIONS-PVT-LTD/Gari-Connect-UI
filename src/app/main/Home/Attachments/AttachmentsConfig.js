import { Redirect } from 'react-router-dom';
import Attachments from './Atttachments';

const AttachmentsConfig={
    settings: {
        layout: {},
    },
    routes:[
        {
            path: '/Attachments',
            component: Attachments,

        },

    ]
}
export default AttachmentsConfig;