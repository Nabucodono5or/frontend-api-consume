import axios from "axios";

const url = "http://localhost:5000/api";

const getLivros = () => {
  axios
    .get(url + "/livros")
    .then((response) => {
      const data = response.data;
      console.log(data);
    })
    .catch((error) => console.log(error));
};

const addLivro = (newLivro) => {
  axios
    .post(url + "/livro", newLivro)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const updateLivro = (id, updateData) => {
  axios
    .put(`${url}/livro/update/${id}`, updateData)
    .then((response) => {
      console.log(responde.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

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

const getLivro = (id) => {
  axios
    .get(`${url}/livro/${id}`)
    .then((response) => {
      const data = response.data;
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { getLivros, addLivro, updateLivro, deleteLivro, getLivro };
