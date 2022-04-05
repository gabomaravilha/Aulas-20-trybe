import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const tarefas = ['acordar', 'estudar', 'arrumar a cama']

const a = (callback, array) => {
  return array.map((elemento) => callback(elemento));
};

function App() {
  return (
    <div className="App">
      {a(Task, tarefas)}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
