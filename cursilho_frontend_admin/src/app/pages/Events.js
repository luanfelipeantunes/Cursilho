import { useEffect, useState } from "react";
import Table from "../components/Table";
import axiosInstance from "../utils/Utils";
import { Constants } from '../utils/Constants';
import Paginator from "../components/Paginator";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import BetterLoader from "../components/BetterLoader";

function Events() {

    const [events, setEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataTable, setDataTable] = useState([]);
    const navigate = useNavigate();
    const [showLoading, setShowLoading] = useState(true);

    const columns = [
        { key: "acron", label: "Sigla" },
        { key: "name", label: "Nome" },

        {
            key: "start_date", label: "Data", render: (start_date) => {
                const formattedDate = moment(start_date).format('DD/MM/YYYY');
                return formattedDate;
            }
        },

        { key: "locale", label: "Local" },
        { key: "description", label: "Descrição" }
    ];


    //Pega os eventos
    useEffect(() => {
        setShowLoading(true);
        axiosInstance.get(Constants.baseUrl + `/events?page=${currentPage}`)
            .then(response => {
                setEvents(response.data.data);
                setDataTable(response.data);
                console.log(response.data);
                setShowLoading(false);
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

    function editEvent(id) {
        navigate(`/admin/events/edit/${id}`);
    }

    return (
        <div style={{ width: '100vw' }}>

            <Link to="/admin/events/new" className="btn btn-primary" style={{ margin: '1.5em 0 0 1.7em', fontWeight: "bold" }}> Novo Evento </Link>

            <Link to={"/admin/users/new"} className="btn btn-secondary" style={{ margin: '1.5em 0 0 1.7em', fontWeight: "bold" }}>
                Novo Usuário
            </Link>

            {showLoading ? <BetterLoader /> :
                <div>
                    <Table
                        columns={columns}
                        data={events}
                        onDelete={deleteEvent}
                        onEdit={editEvent} />

                    <Paginator
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        dataTable={dataTable} />
                </div>
            }

        </div>
    )
}

export default Events;