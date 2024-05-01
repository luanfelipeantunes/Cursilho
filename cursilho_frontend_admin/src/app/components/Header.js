import styles from '../layouts/Header.module.css';
import { SlMenu } from "react-icons/sl";
import SideBar from './SideBar';
import { useState } from 'react';

import { useAuth } from '../utils/Auth/AuthContext';

function Header() {

    const [showBar, setShowBar] = useState(false);
    const {user} = useAuth();

    const getFirstName = (fullName) => {
        const firstName = fullName.split(' ')[0];
        return firstName;
    }

    return <>
        <div>
            {!showBar && <SlMenu onClick={() => setShowBar(true)}/>}
            {showBar && <SideBar setShowBar={() => setShowBar(false)}/>}
            <nav className={styles.navBar}>
                {user && <h5 className={styles.nameUser}>Bem vindo, <span>{getFirstName(user.name)}</span></h5>}
            </nav>


        </div>
    </>
}

export default Header;