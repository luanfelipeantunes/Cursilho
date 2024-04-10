import styles from '../layouts/Header.module.css';
import { SlMenu } from "react-icons/sl";
import SideBar from './SideBar';
import { useState } from 'react';


function Header() {

    const [showBar, setShowBar] = useState(false);

    return <>
        <div>
            {!showBar && <SlMenu onClick={() => setShowBar(true)}/>}
            {showBar && <SideBar setShowBar={() => setShowBar(false)}/>}
            <nav className={styles.navBar}>

            </nav>


        </div>
    </>
}

export default Header;