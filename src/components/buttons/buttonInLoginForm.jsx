import './buttonInLoginForm.css'

export const ButtonInLoginForm = () => {

    const submitInfo = () => {
        console.log('it works')
    }

    return (
        <>
            <button className="button_in_login_form" onClick={submitInfo}><span className='text_in_button'>Войти</span></button>
        </>
    )
}