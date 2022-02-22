import './css/export.css';
import { useContext } from 'react';
import { EmailContext } from '../../pages/admin/Admin';
import { ToCSV } from '../../tools/convertor/toCsv';


const ExportBtn = () => {
  const EmailData = useContext(EmailContext);
  const Data =  EmailData.fullEmailList;
  var blob = new Blob([ToCSV(Data)], { type: 'text/csv;charset=utf-8;' });
  var url = URL.createObjectURL(blob);

  return (
    <div className='exportBtn' onClick={()=>window.open(url)}><span>Export CSV</span></div>
  )
}

export default ExportBtn