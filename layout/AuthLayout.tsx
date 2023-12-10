import React from 'react';
import ContactBar from './ContactBar';
import AuthHeader from './AuthHeader';
import AuthBottomHeader from './AuthBottomHeader';
import { authBottomLinks } from '@/constants/navLinksData';

const AuthLayout: React.FC<ComponentWithChildrenOnly> = ({children}) => {

  return (
    <main className='min-h-screen grid grid-rows-[auto_auto_1fr_auto]'>
        <ContactBar />
        <AuthHeader />
        <section>
            {children}
        </section>
        <AuthBottomHeader linksArr={authBottomLinks} />
    </main>
  )
}

export default AuthLayout