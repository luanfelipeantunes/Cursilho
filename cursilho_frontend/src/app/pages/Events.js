import { useEffect, useState } from "react"
import EventCard from "../components/EventCard";
import { Constants } from '../utils/Constants';
import axiosInstance from "../utils/Utils";
import BetterLoader from "../components/BetterLoader";
import InputSearch from "../components/InputSearch";



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
        console.log(perPage);
    }


    useEffect(() => {
        axiosInstance.get(Constants.baseUrl + `/events?perPage=${perPage}`)
            .then(response => {
                console.log(response.data.data);
                setEvents(response.data.data);
                setDataTableEvents(response.data);
                setShowLoader(false);
            })
            .catch(error => console.error('Erro na solicitação: ', error))
    }, [perPage]);


    const handleChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);

        axiosInstance.get(Constants.baseUrl + `/events?inputSearch=${search}&perPage=${perPage}`)
        .then(response => {
            setEvents(response.data)
            console.log("Eventos: ", response.data);
            setShowLoader(false);
        })
        .catch(error => console.error("Erro: ", error));
    }




    return (
        <>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>

                <InputSearch handleChange={handleChange}/>

                {console.log("Loader: ", showLoader)}
                {console.log("EVENTS: ", events)}


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