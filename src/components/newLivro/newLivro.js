import "./newLivro.css";
import { useState } from "react";
import client from "../../service/service";
import { useNavigate } from "react-router-dom";

function NewLivro() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [editora, setEditora] = useState("");
  const [imagem, setImagem] = useState("");
  const [paginas, setPaginas] = useState(0);
  const [preco, setPreco] = useState(0.0);
  const navigate = useNavigate();

  function handleInputChange(event, set) {
    const target = event.target;
    set(target.value);
  }

  function saveLivro() {
    const livro = {
      titulo,
      editora,
      autor,
      imagem,
      paginas: parseInt(paginas),
      preco: parseFloat(preco),
    };

    console.log(livro);

    client
      .post("/livro", livro)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    navigate("/");
  }

  return (
    <div className="form-edit">
      <div className="form-block-input">
        <span className="form-label">Título</span>
        <input
          type={"text"}
          onChange={(event) => handleInputChange(event, setTitulo)}
        ></input>
      </div>

      <div className="form-block-input">
        <span className="form-label">Autor</span>
        <input
          type={"text"}
          onChange={(event) => handleInputChange(event, setAutor)}
        ></input>
      </div>

      <div className="form-block-input">
        <span className="form-label">Url da Imagem</span>
        <input
          type={"text"}
          onChange={(event) => handleInputChange(event, setImagem)}
        ></input>
      </div>

      <div className="form-block-input">
        <span className="form-label">Editora</span>
        <input
          type={"text"}
          onChange={(event) => handleInputChange(event, setEditora)}
        ></input>
      </div>

      <div className="form-block-input">
        <span className="form-label">Número de páginas</span>
        <input
          type={"number"}
          onChange={(event) => handleInputChange(event, setPaginas)}
        ></input>
      </div>

      <div className="form-block-input">
        <span className="form-label">Preço</span>
        <input
          type={"number"}
          onChange={(event) => handleInputChange(event, setPreco)}
        ></input>
      </div>

      <div className="button-block">
        <button className="submit-button" onClick={saveLivro}>
          Salvar novo Livro
        </button>
      </div>
    </div>
  );
}

export default NewLivro;
