import NavLinksGroup from '@/components/NavLinkGroup';
import Link from 'next/link';
import React from 'react';

const AuthBottomHeader: React.FC<HeaderProps> = ({linksArr = []}) => {
  return (
    <section className=''>
      <section className='container-120 bg-pri-blue py-0 flex items-center justify-between'>
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