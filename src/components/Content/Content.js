import { Insta,Twitter,Ytube,FB,Sucsess } from '../../tools/Icons'
import Input from '../Input/Input'
import ContentHead from '../Content-heading/Content_head'
import SocMediaBtn from '../Soc-media-buttons/SocMediaBtn'
import './css/content.css'

const Content = () => {
  return (
    <div className='content_peace'>
     <div className='content'>
       <Sucsess width="44px" height="70px" />
        <ContentHead heading="Thanks for subscribing!" heading_text="You have successfully subscribed to our email listing. Check your email for the discount code." />
        <div className='media_buttons'>
            <div className='media_btn_box'>
              <SocMediaBtn icon={<FB width="16px" height="16px" />} />
              <SocMediaBtn icon={<Insta width="16px" height="16px" />} />
              <SocMediaBtn icon={<Twitter width="16px" height="16px" />} />
              <SocMediaBtn icon={<Ytube width="16px" height="16px" />} />
            </div>
        </div>
     </div>
    </div>
  )
}

export default Content