import styles from '../layout/Footer.module.css'

function Footer(){
    return(
        <footer className={styles.footer}>
            <div>
                <h5>Cursilho UVA <span>&copy;2024</span></h5>
            </div>
        </footer>
    )
}

export default Footer;