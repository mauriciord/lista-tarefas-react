import React, { Component } from 'react';

class TarefasApp extends Component {

  _addTarefa = () => {
    console.log('ADICIONAR TAREFA - BTN');
  }

  render() {
    return (
      <div>
        <button 
          onClick={this._addTarefa}
        >
          Incluir
        </button>
      </div>
    );
  }

}

export default TarefasApp;