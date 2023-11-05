import React from 'react'
import '../style/avatar.css'
function Avatar({ src, alt, borderRadius }) {
    return (
        <>
            <div className={`avatarImage avatarHeight`}>
                <img className={`${borderRadius}`} src={src} alt={alt} />
            </div>
        </>
    )
}

Avatar.defaultProps = {
    borderRadius: 'cirecleRadius',
};
export default Avatar