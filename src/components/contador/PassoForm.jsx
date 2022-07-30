const PassoForm = (props) => {
    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input type="number" name="passoInput" id="passoInput" value={props.passo} onChange={props.setPasso} />
        </div>
    );
};

export default PassoForm;