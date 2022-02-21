import DomainList from '../../components/AdminEmailList/DomainList'
import AdminHeader from '../../components/AdminHeader/AdminHeader'
import EmailList from '../../components/EmailList/EmailList'
import './css/adminpage.css'
import { createContext, useState, useEffect } from 'react'

export const EmailContext = createContext([]) 
const Admin =()=> {
const[Emails,SetEmailList] = useState(['']);
const EmailListing ={Emails,SetEmailList};
  return (
    <div className="admin_panel">
      <div className='admin_center'>
        <EmailContext.Provider value={EmailListing}>
          <AdminHeader />
          <DomainList />
          <EmailList />
        </EmailContext.Provider>
      </div>
    </div>
  )
}

export default Admin