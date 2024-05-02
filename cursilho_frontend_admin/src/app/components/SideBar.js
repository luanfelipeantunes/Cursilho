import styles from '../layouts/SideBar.module.css';
import { GoX } from "react-icons/go";
import { Link } from 'react-router-dom';
import { singout } from '../utils/Auth/AuthActions';
import RequestLogin from '../utils/Auth/RequestLogin';

function SideBar(props) {
    return (
        <aside className={styles.sideBar}>
            <div>
                <GoX onClick={props.setShowBar} />
                <hr className={styles.horizontalLine}/>
            </div>
            
            <ul>
                <li><Link to="/admin/events"> Eventos </Link></li>
                <li><Link to="admin/events"> Usuários </Link></li>
                <RequestLogin><li className={styles.logout}><Link onClick={singout}>Sair</Link></li></RequestLogin>
            </ul>
        </aside>
    )
}

export default SideBar;