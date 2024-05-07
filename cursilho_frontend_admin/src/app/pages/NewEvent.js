import styles from '../layouts/NewEvent.module.css';
import { Constants } from '../utils/Constants';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/Utils';

function NewEvent(props) {

    const navigate = useNavigate();
    const [newEvent, setNewEvent] = useState(null);

    //Essa função armazena os valores dos inputs em newEvent a cada mudança
    const handleStore = (event) => {
        //Atualiza o estado no evento com os dados do Form
        setNewEvent({ ...newEvent, [event.target.name]: event.target.value });
        console.log(newEvent);
    }

    //Essa função salva de fato o evento
    const submit = async (event) => {
        event.preventDefault();
        const response = await axiosInstance.post(Constants.baseUrl + '/events', newEvent);
        console.log('Status: ', response.status);

        if (response.status !== 200) {
            throw new Error('Erro ao salvar evento');
        }

        navigate('/admin/events');
    }

    return (
        <div className={styles.container}>
            <form className={`form-group`} onSubmit={submit}>

                <label for='acron'> Sigla do Evento (Ex: EDJC) </label>
                <input type='text' id='acron' name='acron' className='form-control' placeholder='Digite a sigla desse evento' onChange={handleStore}></input>

                <label for="name"> Nome do Evento </label>
                <input type='text' id="name" name="name" className="form-control" placeholder='Digite o nome do evento' onChange={handleStore}></input>

                <label for='start_date'> Data de início </label>
                <input type='date' id="start_date" name="start_date" className="form-control" onChange={handleStore}></input>

                {/*<label for='end_date'> Data de Fim </label>
                <input type='date' id="end_date" name="end_date" className="form-control" onChange={handleStore}></input>*/}

                <label for='locale'> Local </label>
                <input type='text' id="locale" name="locale" className="form-control" onChange={handleStore}></input>

                <label for='description'> Descrição </label>
                <textarea rows='3' className='form-control' name='description' onChange={handleStore}> </textarea>

                <button type="sumbit" className="btn btn-primary btn-lg"> Salvar </button>
            </form>
        </div>
    )
}

export default NewEvent;