import './contacts.css'

export const Contacts = () => {
    return (
        <div className='contacts'>
            <h1>Связаться с нами:</h1>
            <div className='block'>
                <div className='block_item'>Tel:<a href='tel:+77777777777' className='tel'>+7 (777) 777 77 77</a></div>
                <div className='block_item'>Email:<a href='mailto:example-bicycle-app@gmail.com' className='email'>example-bicycle-app@gmail.com</a></div>
                <div className='block_item'>Social media:</div>
            </div>
        </div>
    )
}

