import { FilterIcon } from '../../tools/Icons'
import { useState } from 'react';
import './css/filter.css'

 const FilterDrpdwn =()=> {
 const [dropdown,setdropdwn] = useState(true);
 
  return (
    <div>
    <div onClick={()=>setdropdwn(!dropdown)} className="dropdown_main">
    <FilterIcon width="24px" height="24px" /><span>filter</span>
    </div>
    <div id={dropdown?'close':'open'} className="dropdown">
        <span>By name</span>
    </div>
    <div id={dropdown?'close':'open'} className="dropdown sec">
        <span>By date</span>
    </div>
    </div>
    
  )
}

export default FilterDrpdwn