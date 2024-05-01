import styles from "../layouts/Table.module.css";
import { FaPenSquare, FaRegTrashAlt } from "react-icons/fa";

function Table({columns, data, onDelete, onEdit}) {

    return <>

        <table className={`table table-striped table-hover ${styles.table}`}>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column.key}> {column.label} </th>
                    ))}
                    <th scope="col" className="col-1"> Ações </th>
                </tr>
            </thead>
            <tbody>
                    {data.map((item)=>(
                        <tr key={item.id}> 
                            {columns.map((column) => (
                                <td key={`${item.id}-${column.key}`}> 
                                    {column.render ? column.render(item[column.key]) : item[column.key]}
                                </td>
                            ))}
                        <td className={styles.icon}>
                            <FaRegTrashAlt onClick={() => onDelete(item.id)} />
                            <FaPenSquare onClick={() => onEdit(item.id)}/>
                        </td>
                        </tr>
                    ))}
            </tbody>


        </table>

    </>
}

export default Table;