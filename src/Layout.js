import React from 'react'
import './style/layout.css'
const Layout = ({ children, gap , direction}) => {
    return (
        <>
            <div className={`d-flex ${direction}`} style={{gap:`${gap}em`}}>
                {children}
            </div>
        </>
    )
}

export default Layout

