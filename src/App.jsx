import "./App.css";
import Nav from "./assets/navbar/Nav";
import Header from "./Header section/Header";
import Main from "./main section/Main";

function App() {
  return (
    <>
      <div className="w-330 mx-auto">
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
        </div>
      </div>
    </>
  );
}

export default App;
