import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001/",
});

export const loginWith = (username, password) => {
  return API.get(`users?username=${username}&password=${password}`).then((res) => res.data);
};

export const getLogByUser = (username) => {
  return API.get(`log?user=${username}`).then((res) => res.data);
};
