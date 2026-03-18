import { useEffect, useState } from "react";
import Card from "../card/Card";

const Cards = () => {
  const [recipie, setrecipie] = useState([]);

  useEffect(() => {
    fetch("/public/recipies json/recipies.json")
      .then((res) => res.json())
      .then((data) => setrecipie(data));
  }, []);

  // console.log(recipie);

  return (
    
    <div className="w-7/12">
      {/* <h1> blog : {recipie.length} </h1> */}
      {recipie.map((recipie) => (
        <Card key={recipie.id} recipe={recipie}> </Card>
      ))}
    </div>
  );
};

export default Cards;


