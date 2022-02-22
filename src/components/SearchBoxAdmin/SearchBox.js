 import './css/serachbox.css';
 import { useContext } from 'react';
 import { EmailContext } from '../../pages/admin/Admin';

const SearchBox =()=> {
  const EmailData = useContext(EmailContext);

  return (
    <div className="searchbox">
        <input type="text" placeholder='Search' onChange={(e)=>EmailData.SetEmailList(EmailData.fullEmailList.filter(mail=>mail.email.includes(e.target.value)))} />
    </div>
  )
}

export default SearchBox