import React from 'react'
import '../style/indexyz.css'
function Card({children, className,width,height}) {
    var styles =  {
        box: {height: height, width: width}
      };
    return (
    <>
    <div style={styles.box} className={`card relative ${className}`}>
         {children}
    </div>
    </>
  )
}

export default Card