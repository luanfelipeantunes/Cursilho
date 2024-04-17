import { useState } from "react";

function Paginator(props) {

    const pages = [];

    function handlePage(page) {
        return () => props.setCurrentPage(page);
    }

    for (let i = 1; i <= props.dataTable.last_page; i++) {
        pages.push(
            <li key={i} className={`page-item ${props.dataTable.current_page === i ? 'active' : ''}`}>
                <a href='#' className="page-link" onClick={handlePage(i)}>
                    {i}
                </a>
            </li>
        )
    }

    return (
        <nav>
            <ul className={`pagination`}>
                {props.currentPage === 1 ? (
                    <li
                        className={`page-item disabled`}><a href='#' className="page-link">Anterior</a>
                    </li>
                ) :
                    <li className={`page-item`}>
                        <a
                            href='#' className="page-link" id="previous" onClick={handlePage(props.dataTable.current_page - 1)}>
                            Anterior
                        </a>
                    </li>
                }

                {pages}

                {props.dataTable.current_page === props.dataTable.last_page ? (
                    <li className={`page-item disabled`}>
                        <a href='#' className="page-link">
                            Próximo
                        </a>
                    </li>
                ) :
                    <li className={`page-item`}>
                        <a href='#' className="page-link" onClick={handlePage(props.dataTable.current_page + 1)}>
                            Próximo
                        </a>
                    </li>

                }
            </ul>
        </nav>
    )
}

export default Paginator;