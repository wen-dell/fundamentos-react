import React from "react";
import "./Contador.css";
import Display from "./Display";
import PassoForm from "./PassoForm";
import Botoes from "./Botoes";

class Contador extends React.Component {

  state = { 
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5
  };

  incrementar = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  decrementar = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  setPasso = (e) => {
    this.setState({
        passo: +e.target.value
    });
  };

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <Display numero={this.state.numero} />
        <PassoForm passo={this.state.passo} setPasso={this.state.setPasso} />
        <Botoes incrementar={this.incrementar} decrementar={this.decrementar}/>
      </div>
    );
  }

}

export default Contador;
