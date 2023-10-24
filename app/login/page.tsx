"use client";

import isAuth from '@/components/isAuth';
import AuthLayout from '@/layout/AuthLayout';
import React from 'react';

const Login = () => {
  return (
    <AuthLayout>
      <div className='w-full h-full'>Login Page</div>
    </AuthLayout>
  )
}

export default isAuth(Login);