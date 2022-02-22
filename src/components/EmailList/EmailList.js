import './css/emails.css';
import { DeleteX } from '../../tools/Icons';
import { useContext, useState,useEffect } from 'react';
import { EmailContext } from '../../pages/admin/Admin';

import { DeleteSub} from '../../api/apiCalls';

const EmailList =(props)=> {
    const EmailData = useContext(EmailContext);
    const [fromTo,setFromTo] = useState([0,10]);

  return (
    <div className="emailList">
        {props.shownEmailList.slice(fromTo[0],fromTo[1]).map(x=>{
            return(
            <div key={x.id} className='email'>
                <span>{x.email}</span>
                <span>{x.date}</span>
                <DeleteX DelFunct={async()=>{
                    DeleteSub(x.id);
                    EmailData.setRerender(!EmailData.rerender);
                }} width='24px' height='24px' />
            </div>
            )
        })}
        <div className='pagination'>
            {new Array(Math.ceil(props.shownEmailList.length/10)).fill().map((i,a)=>{
                return(
                    <span key={a} onClick={()=>{
                        setFromTo([a===0?0:a*10,(a+1)*10])}} >{a+1}</span>
                )
            })}
        </div>
    </div>
  )
}

export default EmailList