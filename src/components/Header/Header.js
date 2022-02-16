import './css/header.css'
import {Pinaple} from '../../tools/Icons'
function Header() {
  return (
    <header>
         <div className='logo'>
             <Pinaple width="25px" height="40px" />
             <h1>pineapple</h1>
        </div>
        <div className='menu-list'>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">How it works</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div> 
    </header>
  )
}

export default Header