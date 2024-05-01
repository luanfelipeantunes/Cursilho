import { Constants } from "../Constants";
import axios from "axios";
import axiosInstance from "../Utils";

//Realiza login
export const signin = async (credentials) => {

    console.log(credentials);
    try {
        const data = await axios.post(Constants.baseUrl + '/login', credentials);

        console.log("Login realizado com sucesso!");
        return data.data.token;

    } catch (error) {
        return console.log('Erro ao realizar login! Forneça dados válidos');
    }
}

//Realiza logout
export const singout = async () => {
    try {
        await axiosInstance.post(Constants.baseUrl + '/logout');
        const token = localStorage.setItem("authToken", '');
        console.log("Usuário deslogado com sucesso! Token: ", token);
        window.location.reload();
    } catch (error) {
        return console.error("Erro ao deslogar do sistema: ", error);
    }
}