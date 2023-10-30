"use client";

import Input from '@/components/forms/Input';
import AuthLayout from '@/layout/AuthLayout';
import React, { useState, useEffect } from 'react';
import { userCategories } from '@/constants/generalData';
import { countries } from '@/constants/countries';
import Select from '@/components/forms/Select';
import SelectWithPicture from '@/components/forms/SelectWithPicture';
import CompoundPhoneInput from '@/components/forms/CompoundPhoneInput';

interface Values {
  random: string;
  select: string;
  pic: string;
  phoneCode: string;
  phone: string;
}

const Login = () => {
  const [values, setValues] = useState<Values>({random: "", select: "", pic: "+234", phoneCode: "+234", phone: ""});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement|HTMLSelectElement;
    const name = target.name;
    const value = target.value;

    setValues((prevState: Values) => ({ ...prevState, [name]: value}))
  }

  const phoneCodesData: SelectOptionProps[] = Object.values(countries).map((item: any) => (
    {text: item.phone[0], value: item.phone[0], image: item.image}
  ))

  return (
    <AuthLayout>
      <section className='container-120 h-full'>
        <section className='py-10 grid gap-10'>
          <div className="w-full md:w-[478px] mx-auto px-8 py-[1.375rem] grid gap-10 bg-col-1">
            <p>Login Page</p>
            <Input name='random' value={values.random} changeHandler={handleChange} placeholder='Enter your email address here' />
            <Select name='select' optionsArray={userCategories} value={values.select} changeHandler={handleChange} placeholder='Categories' borders={true} />
            <SelectWithPicture name='pic' optionsArray={phoneCodesData} value={values.pic} changeHandler={handleChange} placeholder='Country Phone Code' borders={true} />
            <CompoundPhoneInput 
              phoneCodeName='phoneCode'
              phoneCodeValue={values.phoneCode}
              phoneCodeOptions={phoneCodesData}
              phoneName='phone'
              phoneValue={values.phone}
              changeHandler={handleChange}
              placeholder='***********'
            />
          </div>
        </section>
      </section>
    </AuthLayout>
  )
}

export default Login;