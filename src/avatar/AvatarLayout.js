import React from 'react'
import Avatar from './Avatar'

const AvatarLayout = ({ children, max }) => {
    if (max) {
        if (children.length > max.length) {
        var sliceMax = Array.from(children).slice(0, max)
        var count = children.length - sliceMax.length
        console.log(count)
        }
        
    }
    return (
        <div className={`avatarImage  avatarLayout`}>
            {children.length > max.length ? sliceMax.map((e) =>e) : children}
            {children.length > max.length && <div className={`d-flex avatarImage avatarHeight plusavatar`}>
                <span>{`+ ${count}`}</span>
            </div>}
        </div>
    )
}

export default AvatarLayout