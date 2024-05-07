
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/pt-br';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';
import { useEffect, useState } from 'react';
import { Constants } from '../../utils/Constants';
import Modal from '../../components/Modal';
import axiosInstance from '../../utils/Utils';
import CustomToolbar from './CustomToolbar';

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
        <div className='container'>
            <Calendar
                localizer={localizer}
                style={{ height: '100vh', width: '98%' }}
                events={events}
                startAccessor="start_date"
                endAccessor="start_date"
                titleAccessor="acron"
                onSelectEvent={handleEvent}
                messages={messages}
                culture='pt-br'
                view='month'
                components={{
                    toolbar: CustomToolbar
                }}
            />
        </div>

        {openModal && selectedEvent != null &&
            <Modal
                acron = {selectedEvent.acron}
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