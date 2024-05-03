import { useEffect, useState } from "react"
import EventCard from "../components/EventCard";
import styles from '../layout/Events.module.css';
import { Constants } from '../utils/Constants';
import axiosInstance from "../utils/Utils";
import BetterLoader from "../components/BetterLoader";


function Events() {

    const [events, setEvents] = useState([]);
    const perPageInitial = 6;
    const [perPage, setPerPage] = useState(perPageInitial);
    const [dataTableEvents, setDataTableEvents] = useState([]);
    const [showLoader, setShowLoader] = useState(true);

    function loadMore() {
        setShowLoader(true);
        setPerPage(perPage + perPageInitial);
        console.log(perPage);
    }

    useEffect(() => {
        axiosInstance.get(Constants.baseUrl + `/events?perPage=${perPage}`)
            .then(response => {
                console.log(response.data);
                setEvents(response.data.data);
                setDataTableEvents(response.data);
                setShowLoader(false);
            })
            .catch(error => console.error('Erro na solicitação: ', error))
    }, [perPage]);


    return (
        <>
            <div className={styles.container}>

                {!showLoader ? events.map(event => [
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
            {!showLoader && <div className="d-grid gap-2 col-6 mx-auto">
                <button
                    className={`btn btn-secondary ${dataTableEvents.to === dataTableEvents.total ? 'invisible' : ''}`} type="button" style={{ marginBottom: '1em' }} onClick={() => loadMore()}>
                    Carregar mais
                </button>
            </div>}
        </>
    )
}

export default Events;