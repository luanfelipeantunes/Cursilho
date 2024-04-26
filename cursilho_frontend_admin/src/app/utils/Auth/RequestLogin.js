import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

function RequestLogin({children}){

    const [isAuthorized, setIsAuthorized] = useState(false);
    const navigate = useNavigate();

    //Verifica se existe um token em local Storage
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        console.log("Token recuperado: ", token);
        if(token){
            console.log("Usuário autorizado. Token: ", token);
            setIsAuthorized(true);
        }else{
            navigate("/");
        }
    }, [navigate]);

    //Verifica se a página requisitada é a tela de login
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if(token && window.location.pathname === "/"){
            navigate("/admin/events");
        }
    }, [navigate])

    return isAuthorized ? children : null;

}

export default RequestLogin;
