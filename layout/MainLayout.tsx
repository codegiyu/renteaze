import React from 'react'
import ContactBar from './ContactBar'
import AuthHeader from './AuthHeader'
import { mainNavLinks } from '@/constants/navLinksData'

const MainLayout: React.FC<ComponentWithChildrenOnly> = ({children}) => {

    return (
      <>
        <header>
          <ContactBar />
          <AuthHeader linksArr={mainNavLinks} />
        </header>
        {children}
      </>
    )
}

export default MainLayout