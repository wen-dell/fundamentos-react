import "./App.css";

import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Familia from "./components/basicos/Familia";
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

const App = (props) => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#05 - Componente com Filhos" color="#d56062">
        {/* Comentário em React */}
        <Familia sobrenome="Ferreira">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana"  />
          <FamiliaMembro nome="Letícia" />
        </Familia>
      </Card>

      <Card titulo="#04 - Desafio Aleatório" color="#067bc2">
        <Aleatorio min={1} max={10} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#84bcda">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com Parâmetro" color="#ecc30b">
        <ComParametro titulo="Situação do Aluno" aluno="Wendell" nota={9.3} />
      </Card>

      <Card titulo="#01 - Primeiro Componente" color="#f37748">
        <Primeiro />
      </Card>
    </div>
  </div>
);

export default App;
