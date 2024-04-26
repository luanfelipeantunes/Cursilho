import styles from '../layouts/SideBar.module.css';
import { GoX } from "react-icons/go";
import { Link } from 'react-router-dom';
import { singout } from '../utils/Auth/AuthProvider';
import RequestLogin from '../utils/Auth/RequestLogin';

function SideBar(props) {
    return (
        <aside className={styles.sideBar}>
            <GoX onClick={props.setShowBar} />
            <ul>
                <li><Link to="/admin/events"> Eventos </Link></li>
                <RequestLogin><li className={styles.logout}><Link onClick={singout}>Sair</Link></li></RequestLogin>
            </ul>
        </aside>
    )
}

export default SideBar;