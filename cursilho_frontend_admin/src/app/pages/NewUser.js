import { useState } from 'react';
import styles from '../layouts/NewEvent.module.css';
import axiosInstance from '../utils/Utils';
import { Constants } from '../utils/Constants';
import { useNavigate } from 'react-router-dom';

function NewUser(){

    const [newUser, setNewUser] = useState(null);
    const navigate = useNavigate();

    const handleStore = (event) => {
        setNewUser({...newUser, [event.target.name]: event.target.value})
        console.log(newUser);
    }

    const submit = async (event) => {
        event.preventDefault();

        const response = await axiosInstance.post(Constants.baseUrl + '/register', newUser)
        console.log("Status: ", response.status);

        if(response.status !== 200){
            console.log("Erro no registro!");
            return
        }

        navigate('/admin/events');
    }
    
    return (
        <div className={styles.container}>
            <form className={`form-group`} onSubmit={submit}>

                <label for="name"> Nome do Usuário </label>
                <input type='text' id="name" name="name" className="form-control" onChange={handleStore}></input>

                <label for='start_date'> E-mail </label>
                <input type='text' id="email" name="email" className="form-control" onChange={handleStore}></input>

                <label for='end_date'> Senha </label>
                <input type='text' id="passoword" name="password" className="form-control" onChange={handleStore}></input>

                <button type="sumbit" className="btn btn-primary btn-lg"> Salvar </button>
            </form>
        </div>
    )
}

export default NewUser;