import React from 'react'
import ContactBar from './ContactBar'
import AuthHeader from './AuthHeader'

const MainLayout: React.FC<ComponentWithChildrenOnly> = ({children}) => {

    return (
      <>
        <ContactBar />
        <AuthHeader />
        {children}
      </>
    )
}

export default MainLayout