import logo from '../../img/Logo_MCC.png';
import styles from '../layout/Header.module.css';

function Header(){
    return(
        <nav className={`navbar bg-body-tertiary`}>
            <div className={`container-fluid`}>
                <a href='#' className={`navbar-brand`}>
                    <img src={logo} alt='Logo MCC' width='30' height='24' className={`d-inline-block align-text-top`}/>
                    MCC
                </a>
            </div>
        </nav>
    );

}

export default Header;