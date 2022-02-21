import './css/emails.css';
import { DeleteX } from '../../tools/Icons';
import { useContext, useState,useEffect } from 'react';
import { EmailContext } from '../../pages/admin/Admin';
import { GiveAllEmails } from '../../api/apiCalls'

import { DeleteSub} from '../../api/apiCalls';

const EmailList =()=> {
    const EmailData = useContext(EmailContext);
    const [fromTo,setFromTo] = useState([0,10]);    
    const [shownEmail,setShown] = useState([]);
    const a = async()=>{
        setShown(await GiveAllEmails());
    }
    useEffect(() => {
        console.log('rerendered!!!')
        a();
      }, [shownEmail])

    
    
    
    
  return (
    <div className="emailList">
        {shownEmail.slice(fromTo[0],fromTo[1]).map(x=>{
            return(
            <div className='email'>
                <span>{x.email}</span>
                <span>{x.date}</span>
                <DeleteX DelFunct={()=>{
                    DeleteSub(x.id);
                }} width='24px' height='24px' />
            </div>
            )
        })}
        <div className='pagination'>
            {new Array(Math.ceil(shownEmail.length/10)).fill().map((i,a)=>{
                return(
                    <span onClick={()=>{
                        setFromTo([a===0?0:a*10,(a+1)*10])}} >{a+1}</span>
                )
            })}
        </div>
    </div>
  )
}

export default EmailList