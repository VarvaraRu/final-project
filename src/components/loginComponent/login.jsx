import './login.css'; 
import { ButtonInLoginForm } from '../buttons/buttonInLoginForm';
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <div className='wrapper_for_login_form'>
            <div className='login_form'>
                <h1>Вход</h1>
                <input className='input_login'
                    type='email'
                    placeholder='введите почтовый ящик'
                    ></input>
                <input className='input_login'
                    type='password'
                    placeholder='введите пароль'
                    ></input>
                    <ButtonInLoginForm/>
                    <p className='text_with_link'>Нет аккаунта? <Link to='/register'>Создать</Link></p>
            </div>
        </div>
    )
}