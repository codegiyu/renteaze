import { Alert } from '@/components/Alert';

export default Layout;

function Layout({ children }: { children: React.ReactNode }) {
    
    return (
        <>
            <Alert />
            {children}
        </>
    );
}