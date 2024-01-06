import {  addEntity, addUser, deleteEntity, deleteUser, getAllEntities, getAllUsers, updateEntity, updateUser } from "../sevices/api";


export const queryConfigs = {
    getEntities: { queryKey: "get-clinics", queryFn: getAllEntities},
    addEntity : { mutationFn: addEntity, invalidateKey: "get-clinics" },
    updateEntity: { mutationFn: updateEntity, invalidateKey: "get-clinics" },
    deleteEntity: { mutationFn: deleteEntity, invalidateKey: "get-clinics" },
    
    getUsers: { queryKey: "get-users", queryFn: getAllUsers },
    addUser: { mutationFn: addUser, invalidateKey: "get-users" },
    updateUser: { mutationFn: updateUser, invalidateKey: "get-users" },
    deleteUser: { mutationFn: deleteUser, invalidateKey: "get-users" },

};