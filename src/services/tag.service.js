const axios = require('axios');

import { Api_Loxadev_URI } from "./../utils/constants";

export const getTags = () =>
    axios.get(`${Api_Loxadev_URI}/tag/all`);

export const getTag = (id) =>
    axios.get(`${Api_Loxadev_URI}/tag/${id}`);

export const saveTag = (data) =>
    axios.get(`${Api_Loxadev_URI}/tag/save`,data);

export const updateTag = (id,data) =>
    axios.get(`${Api_Loxadev_URI}/tag/update/${id}`,data);

export const deleteTag = (id) =>
    axios.get(`${Api_Loxadev_URI}/tag/delete/${id}`);