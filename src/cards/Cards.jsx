import { useEffect, useState } from "react";
import Card from "../card/Card";

const Cards = ({handleAddCook}) => {
  const [recipie, setrecipie] = useState([]);
  //  console.log(handleAddCook)
  useEffect(() => {
    fetch("/recipies_json/recipies.json")
      .then((res) => res.json())
      .then((data) => setrecipie(data));
  }, []);

  return (
    <div className="flex flex-wrap gap-10 w-7/12">
      {/* <h1> blog : {recipie.length} </h1> */}
      {recipie.map((recipie) => (
        <Card
         handleAddCook={handleAddCook} 
         key={recipie.id} 
         recipe={recipie}>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
