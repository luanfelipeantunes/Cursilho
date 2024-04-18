import styles from "../layouts/Paginator.module.css";

function Paginator(props) {

    const pages = [];

    //Seta a página
    function handlePage(page) {
        return () => props.setCurrentPage(page);
    }

    //Gera os botões do paginador
    for (let i = 1; i <= props.dataTable.last_page; i++) {
        pages.push(
            <li key={i} className={`page-item ${props.dataTable.current_page === i ? 'active' : ''}`}>
                <a href='javascript:void(0)' className="page-link" onClick={handlePage(i)}>
                    {i}
                </a>
            </li>
        )
    }

    return (
        <nav className={`${styles.paginator}`}>
            <ul className={`pagination`}>
                <li
                    className={`page-item ${props.dataTable.current_page === 1 ? 'disabled' : ''}`}>
                    <a href='javascript:void(0)' className="page-link"
                        onClick={handlePage(props.dataTable.current_page - 1)}>
                        Anterior
                    </a>
                </li>

                {pages}

                <li className={`page-item ${props.dataTable.current_page === props.dataTable.last_page ? 'disabled' : ''}`}>
                    <a href='javascript:void(0)' className="page-link"
                        onClick={handlePage(props.dataTable.current_page + 1)}>
                        Próximo
                    </a>
                </li>
            </ul>
            <div className={`${styles.counter}`}>Mostrando <span>{props.dataTable.to}/{props.dataTable.total}</span></div>
        </nav>
    )
}

export default Paginator;