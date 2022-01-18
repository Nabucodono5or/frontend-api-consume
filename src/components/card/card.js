import "./card.css";

function Card() {
  return (
    <div className="card">
      <img
        className="image-card"
        src="https://images-na.ssl-images-amazon.com/images/I/51mqUvezh2L._SX348_BO1,204,203,200_.jpg"
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
