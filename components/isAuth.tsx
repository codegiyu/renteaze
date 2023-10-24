"use client";

import { redirect } from 'next/navigation';
// import useAppStore from '@/store/useAppStore';
import React, { useEffect } from 'react';

export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
    // const isLoggedIn = useAppStore(state => state.isLoggedIn);
    const auth = true;

    useEffect(() => {
        console.log("I ran")
      if (!auth) {
        redirect("/login");
      }
    }, [auth])
    
    if (!auth) return null;

    return (
        <Component {...props} />
    )
  }
}