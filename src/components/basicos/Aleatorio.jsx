const Aleatorio = (props) => {
    const { min, max } = props;
    const random = getRandom(min, max);
    return (
        <div>
            <h2>Desafio Aleatório</h2>
            <p>Número mínimo: { min }</p>
            <p>Número máximo: { max }</p>
            <p>Número aleatório: { random }</p>
        </div>
    );
};

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default Aleatorio;
