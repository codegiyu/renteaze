import React from 'react';
import { contactBarData } from '@/constants/generalData';
import OutlineButton from '@/components/buttons/OutlineButton';
import BlockButton from '@/components/buttons/BlockButton';
import ContactDataSingle from '@/components/ContactDataSingle';

const ContactBar = () => {
  return (
    <section className='container-120 bg-white'>
        <section className='p-3 flex items-start justify-between'>
            <div className='w-fit flex gap-3 items-center p-[10px]'>
                {contactBarData.map((item: ContactDataSingleProps, idx: number) => (
                    <ContactDataSingle key={idx} type={item.type} icon={item.icon} text={item.text} />
                ))}
            </div>
            <div className='w-fit flex items-center gap-4'>
                <OutlineButton text='Login' width='full' link="/login" styles={{width: "90px"}} />
                <BlockButton text='Sign up' colour='red' width='[90px]' styles={{width: "90px"}} />
            </div>
        </section>
    </section>
  )
}

export default ContactBar