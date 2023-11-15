import React from 'react'

function ToggelButton({className,children,onPress}) {

  return (
    <>
        <button onPress onClick={onPress} className={`${className}`} >{children}</button>
    </>
  )
}

export default ToggelButton