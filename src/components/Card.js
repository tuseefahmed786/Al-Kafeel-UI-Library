import React from 'react'

function Card({children, className,width,height}) {
    var styles =  {
        box: {height: '200px', width: '200px'},
        boxA: {backgroundColor: 'blue'},
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