import { useState } from "react";
import "./App.css";
import Cook from "./assets/navbar/cooking/Cook";
import Nav from "./assets/navbar/Nav";
import Header from "./Header section/Header";
import Main from "./main section/Main";
import Cards from "./cards/Cards";

function App() {

  const [cook , setcook] = useState([0])
  
  const handleAddCook = ( id ) => {
    const newcook = [...cook, id] ;
    setcook(newcook);
    // console.log(id);
  }


  return (
    <>
      <div className="w-360 mx-auto">   
        <div className="mt-10">
          <div> 
            <Nav> </Nav>
          </div>
          <div>
            <Header> </Header>
          </div>
        </div>
        <div>
          <Main> </Main>
          <div className="flex justify-between mt-10">
            <Cards handleAddCook={handleAddCook}> </Cards>
            <Cook cook={cook}> </Cook>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
