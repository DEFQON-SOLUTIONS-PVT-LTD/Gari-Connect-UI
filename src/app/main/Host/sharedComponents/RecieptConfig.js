import { authRoles } from 'app/auth';
import RecieptPaymentDetails from './RecieptPaymentDetails';


const RecieptConfig = {
    auth: authRoles.onlyGuest,
    routes: [
        {
            path: '/RecieptPaymentDetails',
            component: RecieptPaymentDetails,
        },
    ],
};

export default RecieptConfig;