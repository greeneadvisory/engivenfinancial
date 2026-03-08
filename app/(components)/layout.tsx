"use client"
import * as switcherdata from '@/shared/data/switcherdata/switcherdata';
import { Initialload } from '@/shared/layouts-components/contextapi';
import { ThemeChanger } from '@/shared/redux/action';
import React, { useContext, useEffect, useMemo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

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

  useEffect(() => {
    const html = document.documentElement;
    const previous = {
      dir: html.getAttribute('dir'),
      className: html.className,
      headerStyles: html.getAttribute('data-header-styles'),
      verticalStyle: html.getAttribute('data-vertical-style'),
      navLayout: html.getAttribute('data-nav-layout'),
      menuStyles: html.getAttribute('data-menu-styles'),
      toggled: html.getAttribute('data-toggled'),
      navStyle: html.getAttribute('data-nav-style'),
      pageStyle: html.getAttribute('data-page-style'),
      width: html.getAttribute('data-width'),
      menuPosition: html.getAttribute('data-menu-position'),
      headerPosition: html.getAttribute('data-header-position'),
      iconOverlay: html.getAttribute('data-icon-overlay'),
      bgImg: html.getAttribute('bg-img'),
      iconText: html.getAttribute('icon-text'),
      primaryRgb: html.style.getPropertyValue('--primary-rgb'),
      primary: html.style.getPropertyValue('--primary'),
      bodyBg: html.style.getPropertyValue('--body-bg'),
      darkBg: html.style.getPropertyValue('--dark-bg'),
      light: html.style.getPropertyValue('--light'),
      gray: html.style.getPropertyValue('--gray-3'),
      inputBorder: html.style.getPropertyValue('--input-border'),
    };

    html.setAttribute('dir', local_varaiable.dir || 'ltr');
    html.className = local_varaiable.class || '';

    const attrs: Array<[string, string | undefined]> = [
      ['data-header-styles', local_varaiable.dataHeaderStyles],
      ['data-vertical-style', local_varaiable.dataVerticalStyle],
      ['data-nav-layout', local_varaiable.dataNavLayout],
      ['data-menu-styles', local_varaiable.dataMenuStyles],
      ['data-toggled', local_varaiable.toggled],
      ['data-nav-style', local_varaiable.dataNavStyle],
      ['data-page-style', local_varaiable.dataPageStyle],
      ['data-width', local_varaiable.dataWidth],
      ['data-menu-position', local_varaiable.dataMenuPosition],
      ['data-header-position', local_varaiable.dataHeaderPosition],
      ['data-icon-overlay', local_varaiable.iconOverlay],
      ['bg-img', local_varaiable.bgImg],
      ['icon-text', local_varaiable.iconText],
    ];

    attrs.forEach(([name, value]) => {
      if (value === undefined || value === null || value === '') {
        html.removeAttribute(name);
      } else {
        html.setAttribute(name, String(value));
      }
    });

    const styleMap: Array<[string, string | undefined]> = [
      ['--primary-rgb', customstyles['--primary-rgb']],
      ['--primary', customstyles['--primary']],
      ['--body-bg', customstyles['--body-bg']],
      ['--dark-bg', customstyles['--dark-bg']],
      ['--light', customstyles['--light']],
      ['--gray-3', customstyles['--gray-3']],
      ['--input-border', customstyles['--input-border']],
    ];

    styleMap.forEach(([name, value]) => {
      if (!value) {
        html.style.removeProperty(name);
      } else {
        html.style.setProperty(name, String(value));
      }
    });

    return () => {
      if (previous.dir) html.setAttribute('dir', previous.dir); else html.removeAttribute('dir');
      html.className = previous.className;

      const restoreAttrs: Array<[string, string | null]> = [
        ['data-header-styles', previous.headerStyles],
        ['data-vertical-style', previous.verticalStyle],
        ['data-nav-layout', previous.navLayout],
        ['data-menu-styles', previous.menuStyles],
        ['data-toggled', previous.toggled],
        ['data-nav-style', previous.navStyle],
        ['data-page-style', previous.pageStyle],
        ['data-width', previous.width],
        ['data-menu-position', previous.menuPosition],
        ['data-header-position', previous.headerPosition],
        ['data-icon-overlay', previous.iconOverlay],
        ['bg-img', previous.bgImg],
        ['icon-text', previous.iconText],
      ];

      restoreAttrs.forEach(([name, value]) => {
        if (value === null || value === '') {
          html.removeAttribute(name);
        } else {
          html.setAttribute(name, value);
        }
      });

      const restoreStyles: Array<[string, string]> = [
        ['--primary-rgb', previous.primaryRgb],
        ['--primary', previous.primary],
        ['--body-bg', previous.bodyBg],
        ['--dark-bg', previous.darkBg],
        ['--light', previous.light],
        ['--gray-3', previous.gray],
        ['--input-border', previous.inputBorder],
      ];

      restoreStyles.forEach(([name, value]) => {
        if (!value) {
          html.style.removeProperty(name);
        } else {
          html.style.setProperty(name, value);
        }
      });
    };
  }, [customstyles, local_varaiable]);

  return (
    <>
      {children}
    </>
  )
}

export default Layout;