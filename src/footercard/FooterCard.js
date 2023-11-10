import React from 'react'
import '../style/indexyz.css'

function FooterCard({children, className}) {
  return (
    <>
    <div className={`${className}`}>
        {children}
     </div>
    </>
  )
}

export default FooterCard