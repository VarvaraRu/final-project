import './buttonLogIn.css'
import { Link } from 'react-router-dom'

export const ButtonLogIn = () => {
    return (
        <button className="button_log_in"><Link to='/login'><span className='text_in_button'>Войти</span></Link></button>
    )
}