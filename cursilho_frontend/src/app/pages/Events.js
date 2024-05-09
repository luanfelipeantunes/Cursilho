import { useEffect, useState } from "react"
import EventCard from "../components/EventCard";
import { Constants } from '../utils/Constants';
import axiosInstance from "../utils/Utils";
import BetterLoader from "../components/BetterLoader";
import InputSearch from "../components/InputSearch";
import styles from "../layout/Events.module.css";



function Events() {

    const [events, setEvents] = useState([]);
    const perPageInitial = 6;
    const [perPage, setPerPage] = useState(perPageInitial);
    const [dataTableEvents, setDataTableEvents] = useState([]);
    const [showLoader, setShowLoader] = useState(true);
    const [search, setSearch] = useState(null);

    function loadMore() {
        setShowLoader(true);
        setPerPage(perPage + perPageInitial);
    }


    useEffect(() => {
        axiosInstance.get(Constants.baseUrl + `/events?perPage=${perPage}`)
            .then(response => {
                setEvents(response.data.data);
                setDataTableEvents(response.data);
                setShowLoader(false);
                console.log("Events 1 ", response.data.data);
            })
            .catch(error => console.error('Erro na solicitação: ', error))
    }, [perPage]);


    const handleChange = (e) => {
        e.preventDefault();
        setShowLoader(true);
        const value = e.target.value
        setSearch(value);

        axiosInstance.get(Constants.baseUrl + `/events?inputSearch=${search}&perPage=${perPage}`)
            .then(response => {
                setEvents(response.data.data)
                setShowLoader(false);
            })
            .catch(error => console.error("Erro: ", error));
    }




    return (
        <>

            <InputSearch handleChange={handleChange} />

            <div className={styles.events}>
                {!showLoader && events ? events.map(event => [
                    <EventCard
                        key={event.id}
                        name={event.name}
                        start_date={event.start_date}
                        end_date={event.end_date}
                        locale={event.locale}
                        description={event.description}
                        acron={event.acron} />
                ])
                    :
                    <BetterLoader />
                }

            </div>
            {!showLoader && <div className={styles.loadMore}>
                <button
                    className={`btn btn-secondary ${dataTableEvents.to === dataTableEvents.total ? 'invisible' : ''}`} type="button" onClick={() => loadMore()}>
                    Carregar mais
                </button>
            </div>}
        </>
    )
}

export default Events;