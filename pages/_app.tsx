import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/context';
import { useUserData } from '../lib/hooks';
import { UserInfo } from '../lib/types';
import { useState,useEffect } from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth, firestore } from '../lib/firebase';

export default function App({ Component, pageProps }: AppProps) {
  const userData = useUserData();


  return ( <>
    <UserContext.Provider value ={userData as UserInfo}>
      <Navbar/>
      <Component {...pageProps} />
      <Toaster/>
    </UserContext.Provider>
    </>
  );
}
