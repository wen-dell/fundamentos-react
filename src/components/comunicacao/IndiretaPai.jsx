import { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

const IndiretaPai = (props) => {
  let [nome, setNome] = useState('?');
  let [idade, setIdade] = useState(0);
  let [nerd, setNerd] = useState(false);

  function fornecerInformacoes(nome, idade, nerd) {
    setNome(nome);
    setIdade(idade);
    setNerd(nerd);
  }

  return (
    <div>
      <div>
        <span>{ nome } </span>
        <span><strong>{ idade }</strong> </span>
        <span>{ nerd ? 'Verdadeiro' : 'Falso' }</span>
      </div>
      <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
    </div>
  );
};

export default IndiretaPai;
