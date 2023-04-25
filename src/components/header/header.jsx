import './header.css'
import { ButtonLogIn } from '../buttons/buttonLogIn'
import {Link} from 'react-router-dom'

export const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>-Find your bicycle-</div>
            <ul className='navigation'>
                <li className='navigation_item'><Link to='/'>Главная</Link></li>
                <li className='navigation_item'><Link to='/about'>О нас</Link></li>
                <li className='navigation_item'><Link to='/contacts'>Контакты</Link></li>
            </ul>
            <ButtonLogIn/>
        </div>
    )
}