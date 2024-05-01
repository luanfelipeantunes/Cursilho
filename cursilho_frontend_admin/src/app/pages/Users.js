import { Link } from "react-router-dom";
import Table from "../components/Table";


function Users() {
    return (
        <>
            <button> <Link to="/admin/users/new"> Novo Usuário </Link> </button>
            
        </>
    )
}

export default Users;