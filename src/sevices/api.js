import axios from "axios";
import { getItem } from "./helper";
let fileUrl = "";

if (process.env.REACT_APP_ENV === 'development') {
    // axios.defaults.baseURL = "http://192.168.1.15:8001/api/v1";
    axios.defaults.baseURL = "http://192.168.1.12:9900/api/v1";
    // axios.defaults.baseURL = "http://127.0.0.1:8001/api/v1";
} else {
    // axios.defaults.baseURL = "https://joysanaretreat.com/api/v1";
}

if (process.env.REACT_APP_ENV === 'development') {
    // fileUrl = "http://192.168.1.12:4500/api/v1/upload?project=arc";
    fileUrl = "http://127.0.0.1:4500/api/v1/upload?project=arc";
} else {
    fileUrl = "https://skynet.codexp.in/api/v1/upload?project=arc";
}

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers['Authorization'] = '$2a$12$ZkilAKMJ9h0Kv./DjRpfS.u1/6SWDv4SWvDM4WJ7kc1E5Q/cpuX06';

export const setAuthHeader = token => {
    axios.defaults.headers["Authorization"] = token;
    return true;
};

export const clearAuthHeader = () => {
    axios.defaults.headers["Authorization"] = null;
    return true;
};

// AUTH API
export const getOTP = ({ body, userType }) => _callApi(`/auth/${userType}/otp`, "POST", body);
export const validateOTP = ({ body, userType }) => _callApi(`/auth/${userType}/verify`, "POST", body);
export const logout = () => _callApi(`/auth/logout`, "POST");

/* PROFILE APIs */
export const getProfile = ({ id, type }) => _callApi(`/${type}/${id}`, "GET");
export const updateProfile = ({ body, type, id }) => _callApi(`/${type}/${id}`, "PUT", body);

/* CLINICS APIs */
export const addEntity = body => _callApi(`/entities`, "POST", body);
export const getAllEntities = ({ offset, limit }) => _callApi(`/entities?offset=${offset}&limit=${limit}`, "GET");
export const getEntity = id => _callApi(`/entities/${id}`, "GET");
export const updateEntity = ({ id, body }) => _callApi(`/entities/${id}`, "PUT", body);
export const deleteEntity = id => _callApi(`/entities/${id}`, "DELETE");

/* USERS APIs */
export const addUser = body => _callApi("/users", "POST", body);
export const getAllUsers = ({ offset, limit }) => _callApi(`/users?offset=${offset}&limit=${limit}`, "GET");
export const getUser = id => _callApi(`/users/${id}`, "GET");
export const updateUser = ({ id, body }) => _callApi(`/users/${id}`, "PUT", body);
export const deleteUser = id => _callApi(`/users/${id}`, "DELETE");


const _callApi = async (url, method = 'GET', body = {}) => {
    try {
        if(!axios.defaults.headers["Authorization"]) {
            const user = JSON.parse(getItem("user"));
            if (user?.token) {
                axios.defaults.headers["Authorization"] = user.token;
            }
        }
        const response = await axios[method?.toLowerCase()](url, body);
        return response.data;
    } catch (err) {
        return { success: false, result: err.response.data.result };
    }
};