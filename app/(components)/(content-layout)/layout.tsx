"use client"

import dynamic from 'next/dynamic';
import React, { Fragment } from 'react'
import Loader from '@/shared/layouts-components/loader/loader';

const Header = dynamic(() => import('@/shared/layouts-components/header/header'), { ssr: false });
const Sidebar = dynamic(() => import('@/shared/layouts-components/sidebar/sidebar'), { ssr: false });
const Footer = dynamic(() => import('@/shared/layouts-components/footer/footer'), { ssr: false });
const Switcher = dynamic(() => import('@/shared/layouts-components/switcher/switcher'), { ssr: false });
const Backtotop = dynamic(() => import('@/shared/layouts-components/backtotop/backtotop'), { ssr: false });

const Layout = ({ children }: { children: React.ReactNode }) => {

    return (
        <Fragment>
            <Switcher />
            <Loader/>
            <div className='page'>
                <Header />
                <Sidebar />
                <div className='main-content app-content'>
                    <div className='container-fluid'>
                        {children}
                    </div>
                </div>
                <Footer />
            </div>
            <Backtotop />
        </Fragment>
    )

}

export default Layout;