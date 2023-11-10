import React from 'react'
import '../style/indexyz.css'

function Image({className,src,borderRadius}) {
var styles = {
    box: {borderRadius: borderRadius}
}
    return (
        <>
       <img className={`${className}`} src={src}
       style={styles.box} />
        </>
    )
}

export default Image