import "./App.css";
import Cook from "./assets/navbar/cooking/Cook";
import Nav from "./assets/navbar/Nav";
import Cards from "./cards/cards";
import Header from "./Header section/Header";
import Main from "./main section/Main";

function App() {
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
            <Cards className="0"> </Cards>
            <Cook> </Cook>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
