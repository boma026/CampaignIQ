import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL

if (!baseURL){
    throw new Error("Variável de ambiente nao definida");
}

export const api = axios.create(
    {baseURL}
);