import logo from "./logo.svg"
import "./App.css"
import Matheus from "./Matheus"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Matheus initialState={199}>
          <p>Olá eu sou o filho do matheus</p>
        </Matheus>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React COm o matheus
        </a>
      </header>
    </div>
  )
}

export default App
