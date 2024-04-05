import styles from '../layout/Modal.module.css';

function Modal(props) {

    const containerStyle = {
        width: '100vw',
        display: 'block',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    };

    return (
        <div className="modal" style={containerStyle}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3>{props.name}</h3>
                        <button type="button" className="btn-close" onClick={props.setOpenModal}></button>
                    </div>
                    <div className="modal-body">
                        <h5>Data: <span>{props.start_date}</span></h5>
                        <h5>Local <span>{props.locale}</span></h5>
                        <p>{props.description}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={props.setOpenModal}> Fechar </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Modal;