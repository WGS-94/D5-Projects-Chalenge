import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';


function App() {

  const [name, setName] = useState("Wilson");
  const [age, setAge] = useState(90);
  const [bg, setBg] = useState("#ff0");

  const [list, seList] = useState([
    "O rato roeu a roupa da rainha",
    "Aqui vem uma frase poéticca",
    "Programador banana"
  ])

  const handle20 = () => {
    setAge(20)
    setBg("00ff00")
  }

  const handle90 = () => {
    setAge(90)
    setBg("ff00")
  }

  return (
    <div style={{ backgroundColor: bg }}>
      <Header name={name} age={age}/>

      { age === 90 && 
        <button onClick={handle20}>Tenho 20 anos</button>
      }

      { age === 20 && 
         <button onClick={handle90}>Tenho 90 anos</button>
      }

      <hr/>

      <ul>
        {
          list.map((frase, index) => (
            <li key={index}>{frase}</li>
          ))
        }
      </ul>

      <Footer />
    </div>
  );
}

export default App;
