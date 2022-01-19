import Card from "../card/card";
import { useState, useEffect } from "react";
import client from "../../controller/controller";
import "./home.css";

function Home() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    client
      .get("/livros")
      .then((response) => {
        const data = response.data;
        console.log(data);
        setLivros(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const cards = livros.map((item) => {
    console.log(item);
    return <Card key={item.id} item={item} />;
  });

  return <div className="home">{cards}</div>;
}

export default Home;
