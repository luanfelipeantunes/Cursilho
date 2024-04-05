import styles from '../layout/EventCard.module.css';

function EventCard(props) {
    return (
        <div className={`card ${styles.card}`} style={{ width: '25vw' }}>
            <div className={`card-header`}>
                <h5 className={`card-title`}>{props.name}</h5>

            </div>
            <div className={`card-body`}>
                <h6 className={`card-subtitle`}>Data: <span>{props.start_date}</span></h6>
                <p className={`card-text`}>{props.description}</p>
            </div>
            <div className={`card-footer`}>
                <button className={`btn btn-primary`}> Ver mais </button>
            </div>
        </div>
    )
}

export default EventCard;