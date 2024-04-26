import { useEffect, useState } from "react";
import Table from "../components/Table";
import axiosInstance from "../utils/Utils";
import { Constants } from '../utils/Constants';
import Paginator from "../components/Paginator";
import { Link } from "react-router-dom";

function Events() {

    const [events, setEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataTable, setDataTable] = useState([]);


    //Pega os eventos
    useEffect(() => {
        axiosInstance.get(Constants.baseUrl + `/events?page=${currentPage}`)
            .then(response => {
                setEvents(response.data.data);
                setDataTable(response.data);
                console.log(response.data);
            })
            .catch(error => console.error(error))
    }, [currentPage, events.length]);

    //Deleta um Evento
    function deleteEvent(id) {
        axiosInstance.delete(Constants.baseUrl + '/events/' + id)
            .then(response => {
                setEvents(events.filter((event) => event.id !== id))
                console.log('Evento excluído!');
            })
            .catch(error => console.error(error));
    }

    return (
        <div style={{width: '100vw'}}>
            <Link to="/admin/events/new" className="btn btn-primary" style={{ margin: '1.5em 0 0 1.7em' }}> Novo Evento </Link>

            <Table
                events={events}
                deleteEvent={deleteEvent}
            />

            <Paginator
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                dataTable={dataTable}
            />

        </div>
    )
}

export default Events;