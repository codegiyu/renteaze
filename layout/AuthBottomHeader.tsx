import Link from 'next/link';
import React from 'react';

const AuthBottomHeader = () => {
  return (
    <header className='container-120'>
        <section className='bg-pri-blue py-3 px-6 flex items-center justify-between'>
          <Link href="/">
            <h1 className='p-4 text-h5-2 text-white'>Renteaze Properties</h1>
          </Link>
        </section>
    </header>
  )
}

export default AuthBottomHeader