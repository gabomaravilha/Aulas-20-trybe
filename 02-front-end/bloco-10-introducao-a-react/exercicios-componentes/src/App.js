// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
// import Order from './Order';
import Pokedex from './Pokedex';
import pokemons from './data';

// class App extends React.Component {
//   render() {
//     const items = [
//       { 
//         id: 102,
//         user: "cena@gmail.com",
//         product: "Razer Headphone",
//         price: {
//           value: 99.99,
//           currency: "dollars"
//           },
//       },
//       {
//       id: 77,
//       user: "cena@gmail.com",
//       product: "Monster 500mL",
//       price: {
//         value: 9.99,
//         currency: "dollars"
//       }
//     }]

//     return (
//       <div className="App">
//         <h1> Orders recently created </h1>
//         {items.map((elemento) => {
//           return (<div>
//             <Order order = {elemento}/>
//           </div>)
//         })}
//       </div>
//     );
//   }
// }

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Pokedex pokemons={pokemons} />
      </div>
    )
  }
}

export default App;