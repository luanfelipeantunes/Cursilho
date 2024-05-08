import { useState } from 'react';
import styles from '../layout/EventCard.module.css';
import Modal from './Modal';
import moment from 'moment';

function EventCard(props) {

    const [openModal, setOpenModal] = useState(false);
    const formatedDate = moment(props.start_date).format('DD/MM/YYYY');

    return <>
        <div className={`card ${styles.card}`}>
            <div className={`card-header`}>
                <h4 style={{textAlign: 'center', color:'#F25C05', fontWeight: 'bold'}}>{props.acron}</h4>
                <h5 className={`card-title`} style={{textAlign: 'center'}}>{props.name}</h5>

            </div>
            <div className={`card-body`}>
                <h6 className={`card-subtitle`}>Data: <span>{formatedDate}</span></h6>
                <h6>Local: <span>{props.locale}</span></h6>
                <p className={`card-text`}>{props.description}</p>
            </div>
            <div className={`card-footer`}>
                <button className={`btn btn-primary`} onClick={() => setOpenModal(true)}> Ver mais </button>
            </div>
        </div>

        { openModal && <Modal 
            setOpenModal = {() => setOpenModal(false)}
            name = {props.name}
            start_date = {formatedDate}
            locale = {props.locale}
            description = {props.description}
            acron = {props.acron}
        />}
    </>
}

export default EventCard;