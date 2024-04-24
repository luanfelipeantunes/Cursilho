
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/pt-br';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from './MyCalendar.module.css';
import { useEffect, useState } from 'react';
import axiosInstance from '../../../../../cursilho_frontend_admin/src/app/utils/Utils';
import { Constants } from '../../utils/Constants';
import Modal from '../../components/Modal';

function MyCalendar() {

    moment.locale('pt-br');

    const localizer = momentLocalizer(moment);


   const messages = {
        today: 'Hoje',
        previous: 'Anterior',
        next: 'Próximo',
        month: 'Mês',
        week: 'Semana',
        day: 'Dia',
        agenda: 'Agenda',
        date: 'Data',
        time: 'Hora',
        event: 'Evento',
        allDay: 'O dia todo',
        showMore: total => `+${total} mais`
        // Adicione outros textos conforme necessário
    };

    const [events, setEvents] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        axiosInstance.get(Constants.baseUrl + '/events')
            .then(response => {
                setEvents(response.data.data);
            })
            .catch(error => console.error('Erro na chamada à API: ', error))
    }, [])

    const handleEvent = event => {
        console.log(event);
        setSelectedEvent(event)
        setOpenModal(true);
    }

    return <>
        <div className={`${styles.container}`}>
            <Calendar
                localizer={localizer}
                style={{ height: 500, width: '90vw' }}
                events={events}
                startAccessor="start_date"
                endAccessor="start_date"
                titleAccessor="name"
                onSelectEvent={handleEvent}
                messages={messages}
                culture='pt-br'
            />
        </div>

        {openModal && selectedEvent != null &&
            <Modal
                name={selectedEvent.name}
                start_date={moment(selectedEvent.start_date).format('DD/MM/YYYY')}
                locale={selectedEvent.locale}
                description={selectedEvent.description}
                setOpenModal={() => setOpenModal(false)}
            />
        }
    </>
}

export default MyCalendar;