const ParOuImpar = (props) => {
  const isPar = props.numero % 2 === 0;
  return (
    <div>
      <p>{ props.numero } é {isPar ? "Par" : "Ímpar"}</p>
    </div>
  );
};

export default ParOuImpar;
