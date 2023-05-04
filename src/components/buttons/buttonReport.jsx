import './buttonReport.css'
import { Link } from 'react-router-dom'

export const ButtonReport = () => {
    return (
        <button className='button_for_report'><Link to='/report'><span className='text_in_button'>Сообщить о краже</span></Link></button>
    )
}