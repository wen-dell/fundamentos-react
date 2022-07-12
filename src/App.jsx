import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

const App = (props) => (
  <div>
    <h1>Fundamentos React</h1>
    <Aleatorio min={1} max={10}/>
    <Fragmento />
    <ComParametro titulo="Situação do Aluno" aluno="Wendell" nota={9.3} />
    <Primeiro />
  </div>
);

export default App;
