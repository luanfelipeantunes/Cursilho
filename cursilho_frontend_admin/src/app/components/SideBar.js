import { SlMenu } from 'react-icons/sl';
import styles from '../layouts/SideBar.module.css';
import { GoX } from "react-icons/go";

function SideBar( props) {
    return (
        <aside className={styles.sideBar}>
            <GoX onClick={props.setShowBar}/>
            <ul>
                <li>Eventos</li>
                <li>Usuários</li>
            </ul>
        </aside>
    )
}

export default SideBar;