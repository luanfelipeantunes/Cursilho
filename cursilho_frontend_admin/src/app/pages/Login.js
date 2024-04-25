import { useState } from 'react';
import Logo from '../img/Logo_MCC.png';
import styles from '../layouts/Login.module.css'
import { useNavigate } from 'react-router-dom';
import { signin } from '../utils/Auth/AuthProvider';

function Login(props) {

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleStore = (event) => {
        //Atualiza o estado no evento com os dados do Form
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
        console.log(credentials);
    }

    const submit = async (e) => {
        e.preventDefault();

        const token = await signin(credentials);
        console.log("Token: ", token);

        //Seta o token em local storage caso esteja setadp
        if (token) {
            localStorage.setItem('authToken', token);
            return navigate('/admin/events');
        }
    }

    return (
        <div className={styles.containerLogin}>
            <img src={Logo} alt='Logo MCC' style={{ width: '220px', height: '226px' }} />
            <aside>
                <h4> Login </h4>
                <form onSubmit={submit}>
                    <input type='text' onChange={handleStore} name='email' />
                    <input type='text' onChange={handleStore} name='password' />
                    <button type='submit' className='btn btn-primary btn-lg'> Login </button>
                </form>
            </aside>
        </div>
    );
}

export default Login;