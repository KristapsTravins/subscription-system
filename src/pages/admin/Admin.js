import DomainList from '../../components/AdminEmailList/DomainList'
import AdminHeader from '../../components/AdminHeader/AdminHeader'
import EmailList from '../../components/EmailList/EmailList'
import './css/adminpage.css'
const Admin =()=> {
  return (
    <div className="admin_panel">
      <div className='admin_center'>
          <AdminHeader />
          <DomainList />
          <EmailList />
      </div>
    </div>
  )
}

export default Admin