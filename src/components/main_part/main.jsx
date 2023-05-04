import './main.css'
import { ButtonReport } from '../buttons/buttonReport'

export const Main = () => {
    return (
        <div className='main-part'>
            <div className='left_side'>
                <img src='/images/bicycle_main.jpg' alt='bicycle' className='main_image'></img>
            </div>
            <div className='right_side'>
                <span className='short_description'>Мы здесь, чтобы помочь Вам найти ваш велосипед!
                <p className='long_description'>Пожалуйста, оставьте заявку в специальной форме. Мы свяжемся с Вами как можно скорее.</p></span>
                <ButtonReport/>
            </div>
        </div>
    )
}