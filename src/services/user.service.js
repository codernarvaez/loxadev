const axios = require('axios');

import { Api_Users_URI } from "./../utils/constants";

export const getUsers = () =>
    axios.get(`${Api_Users_URI}/user/all`);

export const getUser = (id) =>
    axios.get(`${Api_Users_URI}/user/${id}`);

export const saveUser = (data) =>
    axios.get(`${Api_Users_URI}/user/save`,data);

export const updateUser = (id,data) =>
    axios.get(`${Api_Users_URI}/user/update/${id}`,data);

export const deleteUser = (id) =>
    axios.get(`${Api_Users_URI}/user/delete/${id}`);