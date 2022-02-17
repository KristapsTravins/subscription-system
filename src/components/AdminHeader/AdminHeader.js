import ExportBtn from '../ExportBtn/ExportBtn'
import FilterDrpdwn from '../FilterDrpdwn/FilterDrpdwn'
import SearchBox from '../SearchBoxAdmin/SearchBox'
import './css/a_header.css'

function AdminHeader() {
  return (
        <div className="admin_header">
            <div className='admin_btns'>
                <FilterDrpdwn />
                <ExportBtn />
                <SearchBox />
            </div>
        </div>
  )
}

export default AdminHeader