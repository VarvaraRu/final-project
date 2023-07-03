import './footer.css'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='logo'>-Find your bicycle-</div>
            <ul className='navigation'>
                <li className='navigation_item'><Link to ='reportstable'>Таблица краж</Link></li>
                <li className='navigation_item'><Link to='workerstable'>Сотрудники</Link></li>
            </ul>
            <div className='references'>
                <div><a href='https://icons8.com'>Bicycle icon: Icons8</a></div>
                <div><a href="https://ru.freepik.com/free-vector/bicycle-shop-concept-illustration_25921522.htm#page=2&query=%D0%B2%D0%B5%D0%BB%D0%BE%D1%81%D0%B8%D0%BF%D0%B5%D0%B4&position=25&from_view=search&track=robertav1_2_sidr">image: storyset on Freepik </a></div>
                <div><a href="https://ru.freepik.com/free-vector/404-error-with-a-cute-animal-concept-illustration_7906236.htm#query=not%20found&position=18&from_view=search&track=robertav1_2_sidr">image: storyset on Freepik</a></div>
            </div>
            
        </div>
    )
}