import "./card.css";
import { useNavigate } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import client from "../../service/service";
import { useState } from "react";

function Card(props) {
  const { titulo, autor, paginas, preco, imagem, id } = props.item;
  const [showCard, setShowCard] = useState(true);
  let navigate = useNavigate();

  function removeLivro() {
    client
      .delete(`/livro/rm/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setShowCard(false);
  }

  if (showCard) {
    return (
      <div className="card">
        <div className="badge-remove" onClick={removeLivro}>
          <BsTrash />
        </div>
        <div className="badge-edit" onClick={() => navigate(`/edit/${id}`)}>
          <AiOutlineEdit />
        </div>
        <img
          className="image-card"
          src={
            imagem !== ""
              ? imagem
              : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Wkli1hypk6xKD4unn2lrMgHaJ4%26pid%3DApi&f=1"
          }
          alt="Imagem do livro"
        ></img>
        <div className="footer-card">
          <h2 className="card-title">{titulo}</h2>
          <h3 className="card-author">{autor}</h3>
          <div className="pages-price-block">
            <span className="pages-text">
              <span className="text-card-dest">páginas:</span> {paginas}
            </span>
            <span className="pice-text">
              <span className="text-card-dest">R$:</span> {preco}
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Card;
