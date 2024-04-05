import styles from '../layout/Container.module.css';

function Container(props){
    return (
        <div className={`${styles.container} ${styles.minHeight}`}>
            {props.children}
        </div>
    )
}

export default Container;