import "./card.css";
import { BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";

function Card() {
  return (
    <div className="card">
      <div className="badge-remove">
        <BsTrash />
      </div>
      <div className="badge-edit">
        <AiOutlineEdit />
      </div>
      <img
        className="image-card"
        src="https://images-na.ssl-images-amazon.com/images/I/51mqUvezh2L._SX348_BO1,204,203,200_.jpg"
        alt="Imagem do livro"
      ></img>
      <div className="footer-card">
        <h2 className="card-title">Duna</h2>
        <h3 className="card-author">Frank Herbert</h3>
        <div className="pages-price-block">
          <span className="pages-text">
            <span className="text-card-dest">páginas:</span> 600{" "}
          </span>
          <span className="pice-text">
            <span className="text-card-dest">R$:</span> 32.33
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
