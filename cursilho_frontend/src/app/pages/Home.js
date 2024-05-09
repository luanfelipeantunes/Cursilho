import imgHome from '../../img/Banner-removebg-preview.png';
import styles from '../layout/Home.module.css';
import { FaArrowCircleRight } from "react-icons/fa";

function Home() {

    return (
        <div className={styles.home}>
            <img src={imgHome} alt='MCC Jovem' />

            <p>
                Fazer <span>amigos</span>, para fazê-los amigos de <span>Cristo</span>! <br />
                <a className={`btn btn-primary btn-lg`} href='/events'> Veja os eventos <FaArrowCircleRight /> </a>
            </p>

        </div>
    )
}

export default Home;