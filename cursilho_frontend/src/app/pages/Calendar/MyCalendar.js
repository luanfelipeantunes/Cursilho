
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from './MyCalendar.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Constants } from '../../utils/Constants';
import Modal from '../../components/Modal';

function MyCalendar() {

    const localizer = momentLocalizer(moment);
    const [events, setEvents] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        axios.get(Constants.baseUrl + '/events')
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => console.error('Erro na chamada à API: ', error))
    }, [])

    const handleEvent = event => {
        console.log(event);
        setSelectedEvent(event)
        setOpenModal(true);
    }

    return <>
        <div className={`${styles.container} d-flex justify-content-center align-items-center`}>
            <Calendar
                localizer={localizer}
                style={{ height: 500, width: '90vw' }}
                events={events}
                startAccessor="start_date"
                endAccessor="start_date"
                titleAccessor="name"
                onSelectEvent={handleEvent}
            />
        </div>

        { openModal && selectedEvent != null && 
            <Modal 
                name = {selectedEvent.name}
                start_date = {moment(selectedEvent.start_date).format('DD/MM/YYYY')}
                locale = {selectedEvent.locale}
                description = {selectedEvent.description}
                setOpenModal = {() => setOpenModal(false)}
            />
        }
    </>
}

export default MyCalendar;