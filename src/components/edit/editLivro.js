import "./editLivro.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import client from "../../service/service";

function EditLivro() {
  const { id } = useParams();
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [editora, setEditora] = useState("");
  const [imagem, setImagem] = useState("");
  const [paginas, setPaginas] = useState(0);
  const [preco, setPreco] = useState(0.0);
  const navigate = useNavigate();

  useEffect(() => {
    client
      .get(`/livro/${id}`)
      .then((response) => {
        const livro = response.data;
        setValues(livro);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  function setValues(livro) {
    setTitulo(livro.titulo);
    setAutor(livro.autor);
    setEditora(livro.editora);
    setImagem(livro.imagem);
    setPaginas(livro.paginas);
    setPreco(livro.preco);
  }

  function handleInputChange(event, set) {
    const target = event.target;
    set(target.value);
  }

  function submitChanges() {
    const changes = {
      titulo,
      editora,
      autor,
      imagem,
      paginas: parseInt(paginas),
      preco: parseFloat(preco),
    };

    client
      .put(`/livro/update/${id}`, changes)
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
          value={titulo}
          onChange={(event) => handleInputChange(event, setTitulo)}
        ></input>
      </div>

      <div className="form-block-input">
        <span className="form-label">Autor</span>
        <input
          type={"text"}
          value={autor}
          onChange={(event) => handleInputChange(event, setAutor)}
        ></input>
      </div>

      <div className="form-block-input">
        <span className="form-label">Url da Imagem</span>
        <input
          type={"text"}
          value={imagem}
          onChange={(event) => handleInputChange(event, setImagem)}
        ></input>
      </div>

      <div className="form-block-input">
        <span className="form-label">Editora</span>
        <input
          type={"text"}
          value={editora}
          onChange={(event) => handleInputChange(event, setEditora)}
        ></input>
      </div>

      <div className="form-block-input">
        <span className="form-label">Número de páginas</span>
        <input
          type={"number"}
          value={paginas}
          onChange={(event) => handleInputChange(event, setPaginas)}
        ></input>
      </div>

      <div className="form-block-input">
        <span className="form-label">Preço</span>
        <input
          type={"number"}
          value={preco}
          onChange={(event) => handleInputChange(event, setPreco)}
        ></input>
      </div>

      <div className="button-block">
        <button className="submit-button" onClick={submitChanges}>
          Salvar
        </button>
      </div>
    </div>
  );
}

export default EditLivro;
