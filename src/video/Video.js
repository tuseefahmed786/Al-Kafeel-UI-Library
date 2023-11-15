import React from 'react'
import video from './hello.mp4'
function Video({ loops }) {



    return (
        <>
            <div className='ds' width={300} height={300}>
                <video className='video-align' muted autoPlay={`autoPlay`} loop={`${loops === undefined && undefined} `}
                >
                    <source src={video} type="video/mp4" />
                </video>
            </div>

        </>
    )
}

export default Video