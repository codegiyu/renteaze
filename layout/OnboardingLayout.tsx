import React from 'react';
import ContactBar from './ContactBar';
import AuthHeader from './AuthHeader';

const OnboardingLayout: React.FC<ComponentWithChildrenOnly> = ({children}) => {

  return (
    <>
      <main className='min-h-screen grid grid-rows-[auto_1fr]'>
        <header>
            <ContactBar />
            <AuthHeader />
        </header>
        <section>
            {children}
        </section>
      </main>
    </>
  )
}

export default OnboardingLayout