import Card from "../card/card";
import { useState, useEffect } from "react";
import client from "../../service/service";
import "./home.css";

function Home(props) {
  const [livros, setLivros] = useState([]);
  let change = true;

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
  }, [change]);

  const cards = livros.map((item) => {
    console.log(item);
    return <Card key={item.id} item={item} />;
  });

  change = false;
  return <div className="home">{cards}</div>;
}

export default Home;
