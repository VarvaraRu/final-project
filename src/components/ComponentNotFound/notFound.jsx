import './notFound.css';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <div className='not_found_page'>
            <p className="not_found_text">Sorry, that page doesn't exist. Return to <Link to='/'>HOME</Link></p>
            <img src='/images/not_found.jpg'alt='page doesnt exist' className='not_found_image'></img>
        </div>
    )
}