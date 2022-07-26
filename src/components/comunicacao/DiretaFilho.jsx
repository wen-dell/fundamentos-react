const DiretaFilho = (props) => {
  return (
    <div>
      <div>
        <p><strong>{ props.nome }</strong> tem <strong>{ props.idade }</strong> anos e é nerd ({ props.nerd ? 'Verdadeiro' : 'Falso' })</p>
      </div>
    </div>
  );
};

export default DiretaFilho;
