import NavLinksGroup from '@/components/NavLinkGroup';
import Link from 'next/link';
import React from 'react';

const AuthBottomHeader: React.FC<HeaderProps> = ({linksArr = []}) => {
  return (
    <section className='xl:container-120'>
      <section className='bg-pri-blue py-0 px-0 md:py-2 md:px-4 lg:py-3 lg:px-6 flex items-center justify-between'>
        <Link href="/">
          <h1 className='p-4 text-subtitle1-1 sm:text-h5-2 text-white'>Renteaze Properties</h1>
        </Link>
        {linksArr.length ? (
          <NavLinksGroup linksArr={linksArr} />
        ) : null}
      </section>
    </section>
  )
}

export default AuthBottomHeader