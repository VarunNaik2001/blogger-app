import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/context';
import { createContext } from 'react';
import { UserInfo } from '../lib/types';


export default function App({ Component, pageProps }: AppProps) {
  return ( <>
    <UserContext.Provider value ={{user:null, username:'jeff'} as UserInfo}>
      <Navbar/>
      <Component {...pageProps} />
      <Toaster/>
    </UserContext.Provider>
    </>
  );
}
