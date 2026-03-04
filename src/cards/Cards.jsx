import { useEffect, useState } from "react"

const Cards = () =>{
    
    const [recipie, setrecipie ] = useState([]);

    useEffect( () => {
        fetch("/public/recipies json/recipies.json")
        .then((res) => res.json())
        .then((data) => setrecipie(data))
    }, [])

    return(
       <h1> blog : {recipie.length} </h1>
    )
}

export default Cards ;

