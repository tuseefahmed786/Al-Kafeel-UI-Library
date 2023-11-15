import React from 'react'

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