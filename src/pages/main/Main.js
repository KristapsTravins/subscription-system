import Content from '../../components/Content/Content'
import Header from '../../components/Header/Header'
import './css/main.css'

const Main = () => {
  return (
   <div className="main">
     <div className='left_side'>
      <Header />
      <Content />
     </div>
     <div className='right_side'>

     </div>
   </div>
  )
}

export default Main