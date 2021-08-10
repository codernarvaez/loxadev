import axios from "axios";
import { API_LOXADEV_SITE } from "utils/constants";

export const getArticles = () => axios.get(`${API_LOXADEV_SITE}/article/all`);

export const getArticle = (id) =>
  axios.get(`${API_LOXADEV_SITE}/article/one/${id}`);

export const saveArticle = (data) =>
  axios.save(`${API_LOXADEV_SITE}/article/save`, data);

export const updateArticle = (id, data) =>
  axios.update(`${API_LOXADEV_SITE}/article/update/${id}`, data);

export const deleteArticle = (id) =>
  axios.delete(`${API_LOXADEV_SITE}/article/delete/${id}`);
