import React from 'react'
import pic from "./1696931778341.jpg"


function Image({className}) {
    return (
        <>
       <img className={`${className}`} src={pic}
       style={{ borderRadius: "10px" }} />
        </>
    )
}

export default Image