const Aleatorio = (props) => {
    const { min, max } = props;
    const random = getRandom(min, max);
    return (
        <div>
            <h2>Desafio Aleatório</h2>
            <p><strong>Número mínimo:</strong> { min }</p>
            <p><strong>Número máximo:</strong> { max }</p>
            <p><strong>Número aleatório:</strong> { random }</p>
        </div>
    );
};

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default Aleatorio;
