const Botoes = (props) => {
    return (
        <div>
            <button onClick={props.decrementar}>-</button>
            <button onClick={props.incrementar}>+</button>
        </div>
    );
};

export default Botoes;