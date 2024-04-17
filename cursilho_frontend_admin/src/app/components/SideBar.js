import styles from '../layouts/SideBar.module.css';
import { GoX } from "react-icons/go";

function SideBar( props) {
    return (
        <aside className={styles.sideBar}>
            <GoX onClick={props.setShowBar}/>
            <ul>
                <li><a href="/admin/events">Eventos</a></li>
                <li><a href="/admin/users">Usuários</a></li>
            </ul>
        </aside>
    )
}

export default SideBar;