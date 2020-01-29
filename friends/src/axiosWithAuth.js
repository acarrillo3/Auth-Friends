import axios from "axios";

//function to make authenticated call to the api.

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`
    }
  });
};

export default axiosWithAuth;
