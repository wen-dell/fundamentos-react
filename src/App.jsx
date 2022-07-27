import "./App.css";

import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
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
      <Card titulo="#10 - Comunicação Indireta" color="#7a28cb">
        <IndiretaPai />
      </Card>
      <Card titulo="#09 - Comunicação Direta" color="#b270a2">
        <DiretaPai />
      </Card>
      <Card titulo="#08 - Renderização Condicional" color="#ff8fb1">
        <ParOuImpar numero={21} />
        <ParOuImpar numero={19} />
        <ParOuImpar numero={10} />
        <ParOuImpar numero={5} />
        <UsuarioInfo usuario={{ nome: "Fernando" }} />
        <UsuarioInfo usuario={{ nome: "" }} />
      </Card>
      <Card titulo="#07 - Desafio Repetição" color="#d9bbf9">
        <TabelaProdutos />
      </Card>
      <Card titulo="#06 - Repetição" color="#d991ba">
        <ListaAlunos />
      </Card>
      <Card titulo="#05 - Componente com Filhos" color="#d56062">
        {/* Comentário em React */}
        <Familia sobrenome="Ferreira">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
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
