"use client"
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import React, { Fragment, useEffect, useRef} from 'react'

const Backtotop = dynamic(() => import('@/shared/layouts-components/backtotop/backtotop'), { ssr: false });
const LandingSwitcher = dynamic(() => import('@/shared/layouts-components/switcher/landing-switcher'), { ssr: false });

const Layout = ({ children }: { children: React.ReactNode }) => {
  
    const pathname = usePathname();
    const bodyRef = useRef<any>(null);
    useEffect(() => {
      bodyRef.current=document.body
      // Add 'landing-body' for landing page
      if (pathname.includes("/landing")) {
        bodyRef.current.classList.add('landing-body');
      } else {
        bodyRef.current.classList.remove('landing-body');
      }
  
      // Clean up classes on route change
      return () => {
        bodyRef.current.classList.remove('landing-body');
      };
    }, [pathname]);

    
    
  return (
    <Fragment>
      <div>
        <LandingSwitcher />
        {children}
      </div>
      <Backtotop />
    </Fragment>
  )
}
export default Layout;