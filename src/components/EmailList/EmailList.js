import './css/emails.css';
import { DeleteX } from '../../tools/Icons';
import { useContext } from 'react';
import { EmailContext } from '../../pages/admin/Admin';

const EmailList =()=> {
    const EmailData = useContext(EmailContext);
    new Array(EmailData.Emails.length).fill().map((a,i)=>{
        console.log(i)
    })
  return (
    <div className="emailList">
        {EmailData.Emails.map(x=>{
            return(
            <div className='email'>
                <span>{x.email}</span>
                <span>{x.date}</span>
                <DeleteX width='24px' height='24px' />
            </div>
            )
        })}
     
        <div className='pagination'>
            {new Array(Math.ceil(EmailData.Emails.length/10)).fill().map((i,a)=>{
                return(
                    <span>{a+1}</span>
                )
            })}
            {/* <span>1</span>
            <span>2</span>
            <span>3</span> */}
        </div>
    </div>
  )
}

export default EmailList