import Link from 'next/link'
import React, { Fragment } from 'react'

const Pageheader = (props: any) => {
  return (
    <Fragment>

{/* <!-- Page Header --> */}
        <div className="flex items-center justify-between page-header-breadcrumb flex-wrap gap-2">
            <div>
                <nav>
                    <ol className="breadcrumb mb-1">
                        <li className="breadcrumb-item"><Link scroll={false} href="#!">{props.title}</Link></li>
                          {props.subtitle && (
                            <li className="breadcrumb-item"><Link scroll={false} href="#!">{props.subtitle}</Link></li>
                          )}
                      <li className="breadcrumb-item active" aria-current="page">{props.currentpage}</li>
                    </ol>
                </nav>
                <h1 className="page-title font-medium text-lg mb-0">{props.activepage}</h1>
            </div>
        </div>
 {/* <!-- Page Header Close --> */}

    </Fragment>
  )
}

export default Pageheader