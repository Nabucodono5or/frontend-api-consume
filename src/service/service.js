import axios from "axios";

const url = "http://localhost:5000/api";

const client = axios.create({
  baseURL: url,
});

const deleteLivro = (id) => {
  axios
    .delete(`${url}/livro/rm/${id}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default client;
