import { VscError } from 'react-icons/vsc';
import './errorPage.css';

const ErrorPage = () => {

    return (
        <div>
            <div className='error-container'>
                <div className='error-text-container'>
                    <h1>Oops!</h1>
                    <p>Algo ha fallado...</p>
                    <VscError className='text-[50px] text-red-500'/>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;