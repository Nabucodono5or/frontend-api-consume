import "./card.css";
import { useNavigate } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";

function Card(props) {
  const { titulo, autor, paginas, preco, imagem, id } = props.item;
  let navigate = useNavigate();

  return (
    <div className="card">
      <div className="badge-remove">
        <BsTrash />
      </div>
      <div
        className="badge-edit"
        onClick={() => navigate(`/edit/${id}`)}
      >
        <AiOutlineEdit />
      </div>
      <img
        className="image-card"
        src="https://images-na.ssl-images-amazon.com/images/I/51mqUvezh2L._SX348_BO1,204,203,200_.jpg"
        alt="Imagem do livro"
      ></img>
      <div className="footer-card">
        <h2 className="card-title">{titulo}</h2>
        <h3 className="card-author">{autor}</h3>
        <div className="pages-price-block">
          <span className="pages-text">
            <span className="text-card-dest">páginas:</span>{" "}
            {paginas}
          </span>
          <span className="pice-text">
            <span className="text-card-dest">R$:</span> {preco}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
