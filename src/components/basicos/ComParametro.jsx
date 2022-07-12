const ComParametro = (props) => {
  const status = props.nota >= 7 ? "Aprovado" : "Em recuperação";
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>
        <strong>{props.aluno}</strong> tem nota <strong>{props.nota}</strong>e
        está {status}
      </p>
    </div>
  );
};

export default ComParametro;
