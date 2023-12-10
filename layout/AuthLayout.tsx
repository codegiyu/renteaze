import React from 'react';
import ContactBar from './ContactBar';
import AuthHeader from './AuthHeader';
import AuthBottomHeader from './AuthBottomHeader';
import { authBottomLinks } from '@/constants/navLinksData';

const AuthLayout: React.FC<ComponentWithChildrenOnly> = ({children}) => {

  return (
    <>
      <main className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
        <header>
          <ContactBar />
          <AuthHeader />
        </header>
        <section>
            {children}
        </section>
        <footer>
          <AuthBottomHeader linksArr={authBottomLinks} />
        </footer>
      </main>
    </>
  )
}

export default AuthLayout