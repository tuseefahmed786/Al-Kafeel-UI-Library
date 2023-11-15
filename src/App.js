import './App.css';
import React from 'react';
import { Card, Image, FooterCard } from '@tuseefahmed110/al-kafeel-ui'
import pic from "./cc.avif"
import pix from "./ccc.avif"
import ToggelButton from './components/ToggelButton';

function App() {
  const [isSubscribe, setIsSubscribe] = React.useState(false)
  return (
    <>
      <ToggelButton
        className={`ph-3 py-1 radius-2  
      ${isSubscribe ? 'unfollow-color border-custom' : 'border-1 white follow-color'}`}
        onPress={() => setIsSubscribe(!isSubscribe)}>
        {isSubscribe ? "UnFollow" : "Follow"}</ToggelButton>
    </>
  );
}

{/* <Card width="200px" height="200px" >
          <Image className="width-100 object-fit-cover height-100 radius-1" src={pic} />
          <FooterCard className="
          white-clr
          box-sizing align-items-center
          radius-1
    absolute width-100 bottom-1 d-flex width-100 py-02 ph-1 border-1 blur width-cal-8-100 justify-content-space-between d-flex
     ">
            <p className='sm-text lg-white'>Available soon.</p>
            <button className='sm-text ph-2 py-1 bg-black white-clr radius-1 border-none'>Buy Later</button>
          </FooterCard>
        </Card>

        <Card width="200px" height="200px" >
          <Image className="width-100  object-fit-cover height-100 radius-1 height-100" src={pix} />
          <FooterCard className="ph-1 
          white-clr
          box-sizing align-items-center
          radius-1
    absolute width-100 bottom-1 d-flex width-100 py-02 border-1 blur width-cal-8-100 justify-content-space-between d-flex
     ">
            <p className='sm-text lg-white'>In Just 14$ </p>
            <button className='sm-text ph-2 py-1 bg-black radius-1 white-clr border-none'>Buy Now</button>
          </FooterCard>
        </Card> */}

export default App;