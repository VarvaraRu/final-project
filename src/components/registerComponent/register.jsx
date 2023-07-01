import './register.css'
import { Link } from 'react-router-dom'
import { ButtonInRegisterForm } from '../buttons/buttonInRegisterForm'

export const RegisterComponent = () => {
    return (
        <>
           <div className='wrapper_for_register_form'>
            <div className='register_form'>
                <h1>Зарегистрироваться</h1>
                <input className='input_register'
                    type='email'
                    placeholder='введите почтовый ящик'
                    ></input>
                <input className='input_register'
                    type='password'
                    placeholder='придумайте пароль'
                ></input>
                <input className='input_register'
                    type='text'
                    placeholder='введите имя'
                    ></input>
                <input className='input_register'
                    type='text'
                    placeholder='введите фамилию'
                ></input>
                {/* <label class="checkbox_in_register_form"><input type="checkbox" value="yes" className="checkbox1"></input>Одобрен</label> */}
                <ButtonInRegisterForm/>
                 <p className='text_with_link'>Есть аккаунт? <Link to='/login'>Войти</Link></p>
            </div>
        </div>
        </>
    )
}