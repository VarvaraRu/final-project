import { Link } from "react-router-dom"; 
import './unauthorized.css'

export const Unatorized = () => {
    return (
        <>
            <div className="unauthorized">Данная страница доступна только авторизованным пользователям.<br/>
                Пожалуйста, <Link to='/login'>войдите в свой аккаунт</Link> или <Link to='/register'>зарегистрируйтесь</Link></div>
        </>
    )
}