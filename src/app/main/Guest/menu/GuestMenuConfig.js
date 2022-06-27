import { authRoles } from 'app/auth';
import GuestSetting from './GuestSetting/GuestSetting';
import GuestSupport from './Guestsupport/Support';
import GuestProfile from './Guestprofile/GuestProfile';

const GuestMenuConfig = {
    auth: authRoles.onlyGuest,
    routes: [
        {
            path: '/GuestSetting',
            component: GuestSetting,
        },
        {
            path: '/GuestSupport',
            component: GuestSupport,
        },
        {
            path: '/GuestProfile',
            component: GuestProfile,
        }
    ],
};

export default GuestMenuConfig;