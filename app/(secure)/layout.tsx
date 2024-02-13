import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { auth } from '@/app/_server/utils';
import { Alert } from '@/components/Alert';
import LoggedInUser from '@/components/LoggedInUser';

export default Layout;

function Layout({ children }: { children: React.ReactNode }) {
    // if not logged in redirect to login page
    if (!auth.isAuthenticated()) {
        const returnUrl = encodeURIComponent(headers().get('x-invoke-path') || '/');
        redirect(`/login?returnUrl=${returnUrl}`);
    }

    return (
        <>
            <Alert />
            <LoggedInUser />
            {children}
        </>
    );
}