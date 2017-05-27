import React, { Component } from 'react';

class TarefaForm extends Component {
  state = {
    valorCampoTexto: ''
  };

  render() {
    return (
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          this.props.onSubmit(this.state.valorCampoTexto);
          this.setState({ valorCampoTexto: '' })
        }}>
        <input
          placeholder='Ex.: Comprar pão'
          value={this.state.valorCampoTexto}
          onChange={(evt) => this.setState({ valorCampoTexto: evt.target.value })}
        />
      </form>
    );
  }
}

export default TarefaForm;