"use client"
import * as switcherdata from '@/shared/data/switcherdata/switcherdata';
import { Initialload } from '@/shared/layouts-components/contextapi';
import { ThemeChanger } from '@/shared/redux/action';
import React, { useContext, useEffect, useMemo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  const local_varaiable = useSelector((state: any) => ({
    PrimaryRgb: state.PrimaryRgb,
    bgImg: state.bgImg,
    bodyBg: state.bodyBg,
    class: state.class,
    colorPrimaryRgb: state.colorPrimaryRgb,
    darkBg: state.darkBg,
    dataHeaderPosition: state.dataHeaderPosition,
    dataHeaderStyles: state.dataHeaderStyles,
    dataMenuPosition: state.dataMenuPosition,
    dataMenuStyles: state.dataMenuStyles,
    dataNavLayout: state.dataNavLayout,
    dataNavStyle: state.dataNavStyle,
    dataPageStyle: state.dataPageStyle,
    dataVerticalStyle: state.dataVerticalStyle,
    dataWidth: state.dataWidth,
    dir: state.dir,
    gray: state.gray,
    iconOverlay: state.iconOverlay,
    iconText: state.iconText,
    inputBorder: state.inputBorder,
    lightRgb: state.lightRgb,
    toggled: state.toggled,
  }), shallowEqual);
  const dispatch = useDispatch<any>();

  const customstyles: any = useMemo(() => ({
    ...(local_varaiable.colorPrimaryRgb !== '' && { '--primary-rgb': local_varaiable.colorPrimaryRgb }),
    ...(local_varaiable.PrimaryRgb !== '' && { '--primary': local_varaiable.PrimaryRgb}),
    ...(local_varaiable.bodyBg !== '' && { '--body-bg': local_varaiable.bodyBg }),
    ...(local_varaiable.darkBg !== '' && { '--dark-bg': local_varaiable.darkBg }),
    ...(local_varaiable.lightRgb !== '' && { '--light': local_varaiable.darkBg }),
    ...(local_varaiable.gray !== '' && { '--gray-3': local_varaiable.gray }),
    ...(local_varaiable.inputBorder !== '' && { '--input-border': local_varaiable.inputBorder }),
  }), [
    local_varaiable.PrimaryRgb,
    local_varaiable.bodyBg,
    local_varaiable.colorPrimaryRgb,
    local_varaiable.darkBg,
    local_varaiable.gray,
    local_varaiable.inputBorder,
    local_varaiable.lightRgb,
  ]);

  
  const theme :any= useContext(Initialload);
  useEffect(() => {
    switcherdata.LocalStorageBackup((value: any) => dispatch(ThemeChanger(value)), theme.setpageloading);
    // setlateLoad(true);
  }, [dispatch, theme.setpageloading]);

  return (
    <html
      suppressHydrationWarning={true} 
      dir={local_varaiable.dir}
      className={`${local_varaiable.class} ${geistSans.variable} ${geistMono.variable}`}
      data-header-styles={local_varaiable.dataHeaderStyles}
      data-vertical-style={local_varaiable.dataVerticalStyle}
      data-nav-layout={local_varaiable.dataNavLayout}
      data-menu-styles={local_varaiable.dataMenuStyles}
      data-toggled={local_varaiable.toggled}
      data-nav-style={local_varaiable.dataNavStyle}
      data-page-style={local_varaiable.dataPageStyle}
      data-width={local_varaiable.dataWidth}
      data-menu-position={local_varaiable.dataMenuPosition}
      data-header-position={local_varaiable.dataHeaderPosition}
      data-icon-overlay={local_varaiable.iconOverlay}
      bg-img={local_varaiable.bgImg}
      icon-text={local_varaiable.iconText}
      style={customstyles}>
      <head>
        <meta name="keywords" content="nextjs, nextjs, nextjs dashboard, admin panel, template admin, firebase nextjs, router adminreact next js, admin, tailwind dashboard, tailwind admin template, tailwind nextjs, next js tailwind, tailwind dashboard template, app router, tailwindcss nextjs, router admin panel, dashboard, nextjs with tailwind," />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

export default Layout;