import logo from "./logo.svg"
import "./App.css"
import Matheus from "./Matheus"

function App() {
  const marcas = ["apple", "sansung", "xiaomi", "motorola", "lg"];
  const listaMarcas = marcas.map ((string) =>
    <li>{string}</li>  
   );
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Matheus initialState={199}>
          <p>Olá eu sou o filho do matheus</p>
        </Matheus>
        <ul>{listaMarcas}</ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React COm o matheus
function 

        </a>
      </header>
    </div>
  )
}

export default App
