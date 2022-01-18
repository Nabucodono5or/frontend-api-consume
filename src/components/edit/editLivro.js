import "./editLivro.css";
import { useState } from "react";

function EditLivro() {
  const [titulo, setTitulo] = useState("Duna");
  const [autor, setAutor] = useState("Frank Herbert");
  const [editora, setEditora] = useState("Leya");
  const [imagem, setImagem] = useState("Nenhum");
  const [paginas, setPaginas] = useState(600);
  const [preco, setPreco] = useState(32.33);

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
    console.log(changes);
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
