const axios = require('axios');

import { Api_Loxadev_URI } from "./../utils/constants";

export const getArticles = () =>
    axios.get(`${Api_Loxadev_URI}/article/all`);

export const getArticle = (id) =>
    axios.get(`${Api_Loxadev_URI}/article/${id}`);

export const saveArticle = (data) =>
    axios.get(`${Api_Loxadev_URI}/article/save`,data);

export const updateArticle = (id,data) =>
    axios.get(`${Api_Loxadev_URI}/article/update/${id}`,data);

export const deleteArticle = (id) =>
    axios.get(`${Api_Loxadev_URI}/article/delete/${id}`);