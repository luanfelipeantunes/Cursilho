import styles from "../layouts/Table.module.css";
import moment from 'moment';
import { FaPenSquare, FaRegTrashAlt } from "react-icons/fa";
import { Constants } from "../utils/Constants";
import axios from "axios";

function Table(props) {

    

    return (

        <table className={`table table-striped table-hover ${styles.table}`}>
            <thead>
                <tr>
                    <th scope="col" className="col-1"> Sigla </th>
                    <th scope="col" className="col-2"> Evento </th>
                    <th scope="col" className="col-2"> Data </th>
                    <th scope="col" className="col-2"> Local </th>
                    <th scope="col" className="col-3"> Descrição </th>
                    <th scope="col" className="col-1"> Ações </th>
                </tr>
            </thead>
            <tbody>
                {props.events.map(event => [
                    <tr>
                        <td> EDDD </td>
                        <td> {event.name} </td>
                        <td> {moment(event.start_date).format('DD/MM/YYYY')} </td>
                        <td> {event.locale} </td>
                        <td> {event.description} </td>
                        <td className={styles.icon}>
                            <FaRegTrashAlt onClick={() => props.deleteEvent(event.id)}/> 
                            <FaPenSquare/>
                        </td>
                    </tr>
                ])}
            </tbody>
        </table>

    )
}

export default Table;