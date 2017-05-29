import React, { Component } from 'react';

import style from './TarefaForm.scss';

class TarefaForm extends Component {
  state = {
    valorCampoTexto: ''
  };

  render() {
    return (
      <div className={style.formArea}>
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            this.props.onSubmit(this.state.valorCampoTexto);
            this.setState({ valorCampoTexto: '' })
          }}>
          <input
            className={style.lembreteTexto}
            placeholder='Digite sua tarefa. Ex.: Comprar pão'
            value={this.state.valorCampoTexto}
            onChange={(evt) => this.setState({ valorCampoTexto: evt.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default TarefaForm;