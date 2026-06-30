import axios from "axios";

const API = axios.create({
    baseURL = "http://4.224.186.213/evaluation-service/"
});

export const getnotifications = async(token) => {
    const response = await API.get("/notifications",{
        headers:{
            Authorization : 'Bearer ${token}',
        }
    });
    return response.data.notification;
};