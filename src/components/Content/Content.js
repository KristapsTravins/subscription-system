import { Insta,Twitter,Ytube,FB,Sucsess } from '../../tools/Icons'
import Input from '../Input/Input'
import ContentHead from '../Content-heading/Content_head'
import SocMediaBtn from '../Soc-media-buttons/SocMediaBtn'
import './css/content.css'
import { useState } from 'react'


const Content = () => {
const [isSubscribed,setSubscribed] = useState(false);
console.log(isSubscribed);

  return (
    <div className='content_peace'>
     <div className='content'>
        {isSubscribed?<Sucsess width="44px" height="70px" />:<></>}
        <ContentHead heading={isSubscribed?"Thanks for subscribing!":"Subscribe to newsletter"} heading_text={isSubscribed?"You have successfully subscribed to our email listing. Check your email for the discount code.":"Subscribe to our newsletter and get 10% discount on pineapple glasses."} />
        {isSubscribed?<></>:<Input isSub={isSubscribed} setSub={()=>setSubscribed(true)}  />}
        <div className='media_buttons'>
            <div className='media_btn_box'>
              <SocMediaBtn id="fb" icon={<FB width="16px" height="16px" />} />
              <SocMediaBtn id="insta" icon={<Insta width="16px" height="16px" />} />
              <SocMediaBtn id="twit"  icon={<Twitter width="16px" height="16px" />} />
              <SocMediaBtn id="yt"  icon={<Ytube  width="16px" height="16px" />} />
            </div>
        </div>
     </div>
    </div>
  )
}

export default Content