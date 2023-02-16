import axios from "./customizeAxios";

const getAllGalary = () => {
  return axios.get(`/galleries`);
};
export { getAllGalary };
