import DomainList from '../../components/AdminEmailList/DomainList'
import AdminHeader from '../../components/AdminHeader/AdminHeader'
import EmailList from '../../components/EmailList/EmailList'
import { GiveAllEmails,GiveAllEmailDomains } from '../../api/apiCalls';
import './css/adminpage.css'
import { createContext, useState, useEffect } from 'react'

export const EmailContext = createContext([]) 

const Admin =()=> {
const [fullEmailList, setFullEmailList] = useState([''])
const[Emails,SetEmailList] = useState(['']);
const [DomainEmail, setDomainEmail] =useState([''])
const [rerender,setRerender] = useState(false);
const a = async()=>{
    setFullEmailList(await GiveAllEmails());
    SetEmailList(await GiveAllEmails());
    setDomainEmail(await GiveAllEmailDomains());
 }
 useEffect(()=>{
   console.log('rerendered !!!')
   a()
 },[rerender])

const EmailListing ={Emails,SetEmailList,rerender,setRerender,fullEmailList};
  return (
    <div className="admin_panel">
      <div className='admin_center'>
        <EmailContext.Provider value={EmailListing}>
          <AdminHeader  />
          {Emails === null?<></>:<DomainList EmailList={DomainEmail}/>}
          {Emails === null?<></>:<EmailList shownEmailList={Emails} />}
          
        </EmailContext.Provider>
      </div>
    </div>
  )
}

export default Admin