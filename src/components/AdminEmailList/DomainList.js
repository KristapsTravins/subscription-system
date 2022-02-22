import { useContext } from 'react';
import './css/domains.css'
import { EmailContext } from '../../pages/admin/Admin';

 const DomainList =(props)=> {
 const EmailData = useContext(EmailContext);
  

  return (
    <div className='domain_list'>
      {props.EmailList.map(i=>{
       return(
        <div onClick={()=>{
          
          EmailData.SetEmailList(EmailData.fullEmailList.filter(email=>email.email.includes(i)));

          
          }} key={i} className='domain_btn'>
        <span>{i}</span>
        </div>
       )
      })}
    </div>
  )
}

export default DomainList