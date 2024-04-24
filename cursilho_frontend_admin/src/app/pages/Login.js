import { useState } from 'react';
import Logo from '../img/Logo_MCC.png';
import styles from '../layouts/Login.module.css'
import { Constants } from '../utils/Constants';
import axiosInstance from '../utils/Utils';
import { useNavigate } from 'react-router-dom';


function Login() {

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleStore = (event) => {
        //Atualiza o estado no evento com os dados do Form
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
        console.log(credentials);
    }

    const submit = (e) => {
        e.preventDefault();
        
        try {
            const response = axiosInstance.post(Constants.baseUrl + '/login', credentials)

            if (response.status !== 200) {
                console.error('Login não autorizado!');
            }

            navigate('/admin/events');

        } catch (error) {
            console.error('Erro: ', error);
        };
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