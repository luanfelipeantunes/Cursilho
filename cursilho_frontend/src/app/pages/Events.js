import { useEffect, useState } from "react"
import EventCard from "../components/EventCard";
import styles from '../layout/Events.module.css';
import axios from 'axios';
import { Constants } from '../utils/Constants';


function Events() {

    const [events, setEvents] = useState([]);
    const perPageInitial = 6;
    const [perPage, setPerPage] = useState(perPageInitial);
    const [dataTableEvents, setDataTableEvents] = useState([]);

    function loadMore() {
        setPerPage(perPage + perPageInitial);
        console.log(perPage);
    }

    useEffect(() => {
        axios.get(Constants.baseUrl + `/events?perPage=${perPage}`)
            .then(response => {
                console.log(response.data);
                setEvents(response.data.data);
                setDataTableEvents(response.data);
            })
            .catch(error => console.error('Erro na solicitação: ', error))
    }, [perPage]);


    return (
        <>
            <div className={styles.container}>
                {events.map(event => [
                    <EventCard
                        name={event.name}
                        start_date={event.start_date}
                        end_date={event.end_date}
                        locale={event.locale}
                        description={event.description}
                        acron={event.acron} />
                ])}
            </div>
            <div class="d-grid gap-2 col-6 mx-auto">
                <button
                    className={`btn btn-secondary ${dataTableEvents.to === dataTableEvents.total ? 'invisible' : ''}`} type="button" style={{ marginBottom: '1em' }} onClick={() => loadMore()}>
                    Carregar mais
                </button>
            </div>
        </>
    )
}

export default Events;