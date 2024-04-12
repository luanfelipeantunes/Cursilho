import { useEffect, useState } from "react";
import Table from "../components/Table";
import axios from 'axios';
import { Constants } from '../utils/Constants';

function Events() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get(Constants.baseUrl + '/events')
            .then(response => {
                setEvents(response.data)
                console.log(response.data);
            })
            .catch(error => console.error(error))
    }, []);

    return (
        <div style={{ width: '100vw' }}>
            <a href="/admin/events/new" className="btn btn-primary" style={{margin: '1.5em 0 0 2.2em'}}> Novo Evento </a>
            <Table events = {events}/>
        </div>
    )
}

export default Events;