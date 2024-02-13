'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { useAlertService } from '@/app/_services';
import { ToastContainer, toast } from 'react-toastify';

export { Alert };

function Alert() {
    const pathname = usePathname();
    const alertService = useAlertService();
    const alert = alertService.alert;
    
    useEffect(() => {
        // clear alert on location change
        alertService.clear();
    }, [pathname]);

    useEffect(() => {
        if (alert?.type === "alert-success") {
            toast.success(alert.message);
        } else if (alert?.type === "alert-danger") {
            toast.error(alert.message);
        } else {
            alertService.clear();
            toast.dismiss();
        }
    }, [alert])

    if (!alert) return null;

    return (
        // <div className="container">
        //     <div className="m-3">
        //         <div className={`alert alert-dismissible ${alert.type}`}>
        //             {alert.message}
        //             <button type="button" className="btn-close" onClick={alertService.clear}></button>
        //         </div>
        //     </div>
        // </div>
        <ToastContainer />
    );
}