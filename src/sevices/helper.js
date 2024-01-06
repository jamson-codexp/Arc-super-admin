import toast from 'react-hot-toast';

const toastConfig = {
    duration: 2000,
    position: "top-center"
};

export const showNotification = (type, message) => {
    toast[type](message, toastConfig);
};

export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key) => {
    return localStorage.getItem(key);
};

export const deleteItem = (key) => {
    localStorage.removeItem(key);
};

export const deleteAll = () => {
    localStorage.clear();
};