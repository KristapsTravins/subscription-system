import './css/header.css'
import {Pinaple} from '../../tools/Icons'
function Header() {
  return (
    <header>
         <div className='logo'>
             <Pinaple width="25px" height="40px" />
             <h1>pineapple</h1>
        </div>
        <div className='menu-list' id="select_menu">
            <ul id="option_list" tabIndex="0" aria-labelledby="select_menu">
                <li><a href="/admin">About</a></li>
                <li><a href="/admin">How it works</a></li>
                <li><a href="/admin">Contact</a></li>
            </ul>
        </div> 
    </header>
  )
}

export default Header