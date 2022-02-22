import { FilterIcon } from '../../tools/Icons'
import { useState,useContext } from 'react';
import './css/filter.css'
import { EmailContext } from '../../pages/admin/Admin';
import { SortDate } from '../../tools/Sorting/Sort';

 const FilterDrpdwn =()=> {
 const [dropdown,setdropdwn] = useState(true);
 const EmailData = useContext(EmailContext);
 
  return (
    <div>
    <div onClick={()=>setdropdwn(!dropdown)} className="dropdown_main">
    <FilterIcon width="24px" height="24px" /><span>filter</span>
    </div>
    <div id={dropdown?'close':'open'}  onClick={()=>{
      setdropdwn(true);
      EmailData.SetEmailList(SortDate(EmailData.Emails));
      console.log('a')
    }} className="dropdown sec">
        <span>By date</span>
    </div>
    </div>
    
  )
}

export default FilterDrpdwn