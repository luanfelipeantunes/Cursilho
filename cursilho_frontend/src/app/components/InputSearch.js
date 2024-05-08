import { FaMagnifyingGlass } from "react-icons/fa6";
import styles from "../layout/InputSearch.module.css";

function InputSearch({handleChange}) {
    return (
        <div style={{width: '95vw', display: 'flex', justifyContent: 'center'}}>
            <input type='text' className={`${styles.searchInput}`} placeholder="Pesquise um evento" name="inputSearch" onChange={handleChange}/>
            <FaMagnifyingGlass />
        </div>
    )
}

export default InputSearch;