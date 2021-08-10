import axios from "axios";
import { API_LOXADEV_SITE } from "utils/constants";

export const getTags = () => axios.get(`${API_LOXADEV_SITE}/tag/all`);

export const getTag = (id) => axios.get(`${API_LOXADEV_SITE}/tag/one/${id}`);

export const saveTag = (data) =>
  axios.save(`${API_LOXADEV_SITE}/tag/save`, data);

export const updateTag = (id, data) =>
  axios.update(`${API_LOXADEV_SITE}/tag/update/${id}`, data);

export const deleteTag = (id) =>
  axios.delete(`${API_LOXADEV_SITE}/tag/delete/${id}`);
