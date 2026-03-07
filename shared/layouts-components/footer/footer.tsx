"use client"
import Link from 'next/link'
import React, { Fragment } from 'react'

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer mt-auto py-3 bg-white dark:bg-bodybg text-center">
        <div className="container">
          <span className="text-textmuted dark:text-textmuted/50"> Copyright © <span className='text-textmuted dark:text-textmuted/50' id="year"> 2026 </span>
            <Link href="#!" scroll={false} className="text-dark font-medium">Engiven</Link>. All rights reserved </span>
        </div>
      </footer>
    </Fragment>
  )
}

export default Footer