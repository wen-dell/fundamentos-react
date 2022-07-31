import { useState } from "react";

const Mega = (props) => {
  const { min, max } = props;

  const [quantidade, setQuantidade] = useState(props.quantidade || 6);
  const numerosIniciais = Array(quantidade).fill(0);
  const [numeros, setNumeros] = useState(numerosIniciais);

  const getAleatorio = () => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getNumeroNaoIncluido = () => {
    const aleatorio = getAleatorio();
    return numeros.includes(aleatorio) ? getNumeroNaoIncluido() : aleatorio;
  };

  const getNumeros = () => {
    return Array(quantidade)
      .fill(0)
      .reduce((nums) => {
        const novoNumero = getNumeroNaoIncluido();
        return [...nums, novoNumero];
      }, [])
      .sort((n1, n2) => n1 - n2);
  };

  return (
    <div>
      <label htmlFor="quantidade">Quantidade de números:</label>
      <p>{ numeros.join(' ') }</p>
      <input type="number" id="quantidade" min="5" max="15" value={quantidade} onChange={e => setQuantidade(+e.target.value)} />
      <button type="button" onClick={_ => setNumeros(getNumeros())}>Gerar números</button>
    </div>
  )
};

export default Mega;
