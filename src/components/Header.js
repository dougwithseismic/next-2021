import React from 'react'
import Image from 'next/image'
import siteSettings from '/siteSettings'

export const Header = () => {
  return (
    <navigation>
      <div className="container p-4 flex justify-between items-center">
        <Image
          src={siteSettings.siteLogo}
          alt={`The Broadband Hero Logo`}
          width="160"
          height="50"
        ></Image>
        Header
      </div>
    </navigation>
  )
}
