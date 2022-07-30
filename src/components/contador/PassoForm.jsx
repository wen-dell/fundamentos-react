const PassoForm = (props) => {
    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input type="number" name="passoInput" id="passoInput" value={props.passo} onChange={e => props.setPasso(+e.target.value)} />
        </div>
    );
};

export default PassoForm;