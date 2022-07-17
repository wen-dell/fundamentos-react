import produtos from "../../data/produtos";
import "./TabelaProdutos.css";

const TabelaProdutos = (props) => {
  const rows = produtos.map((produto, i) => {
    return (
      <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>{produto.preco}</td>
      </tr>
    );
  });

  return (
    <div className="TableContainer">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default TabelaProdutos;
