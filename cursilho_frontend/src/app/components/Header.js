import logo from '../../img/Logo_MCC.png';
import styles from '../layout/Header.module.css';
import { SideBarMb } from './SideBarMb';
import { FaAlignLeft } from "react-icons/fa";

function Header() {
    return (
        <>
            <SideBarMb>
                <div>

                    <FaAlignLeft />
                    <ul>
                        <li>Eventos</li>
                        <li>Calendário</li>
                    </ul>
                </div>
            </SideBarMb>

            <nav className={`navbar bg-body-tertiary ${styles.navBar}`}>
                <div className={`container-fluid`}>
                    <a href='/' className={`navbar-brand d-flex align-items-center`}>
                        <img src={logo} alt='Logo MCC' width='60' height='60' className={`d-inline-block align-text-top`} />
                        <span className={`ms-3`}>MCC</span>
                    </a>
                    <ul className={`navbar-nav d-flex flex-row`}>
                        <li className={`nav-item`}>
                            <a className={`nav-link ${styles.listItem}`} aria-current="page" href="/events">Eventos</a>
                        </li>
                        <li className={`nav-item`}>
                            <a className={`nav-link ${styles.listItem}`} aria-current="page" href="/calendar">Calendário</a>
                        </li>
                    </ul>
                </div>
            </nav>


        </>
    );

}

export default Header;