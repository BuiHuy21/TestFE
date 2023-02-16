import axios from "./customizeAxios";

const login = (username) => {
  return axios.post("/auth/login", { username: username });
};
const logout = () => {
  return axios.delete("/auth/logout");
};
export { login, logout };
