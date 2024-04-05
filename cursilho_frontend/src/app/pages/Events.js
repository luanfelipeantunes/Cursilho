import { useEffect, useState } from "react"
import EventCard from "../components/EventCard";
import styles from '../layout/Events.module.css';
import axios from 'axios';
import {Constants} from '../utils/Constants';


function Events(){

    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get(Constants.baseUrl + '/events')
        .then(response => {
            console.log(response.data);
            setEvents(response.data);
        })
        .catch(error => console.error('Erro na solicitação: ', error))
    }, []);

    return(
        <div className={styles.container}>
            {events.map(event => [
                <EventCard 
                    name = {event.name}
                    start_date = {event.start_date}
                    end_date = {event.end_date}
                    locale = {event.locale}
                    description = {event.description}
                />
            ])}
        </div>
    )
}

export default Events;