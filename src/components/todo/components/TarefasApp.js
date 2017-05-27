import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addTarefa,
  toggleTarefa,
  filtrar
} from '../../../actions';

import Tarefa from './Tarefa';
import TarefaForm from './TarefaForm';

import FiltrosLista from '../../filtros/components/FiltrosLista';

import { filtroDeTarefas } from '../../filtros/helpers';

class TarefasApp extends Component {

  _onFormSubmit = (valorCampoTexto) => {
    this.props.addTarefa(valorCampoTexto);
  }

  _onFiltroClick = (filtro) => {
    this.props.filtrar(filtro);
  }

  _onClickTarefa = (evt, id) => {
    evt.preventDefault();
    this.props.toggleTarefa(id);
  };

  _renderTarefas = (tarefasFiltradas) => {
    return tarefasFiltradas.map( tarefa =>
      <Tarefa
        key={tarefa.id}
        onClick={(evt) => this._onClickTarefa(evt, tarefa.id)}
        {...tarefa}
      />
    );
  }

  render() {
    const tarefasFiltradas = filtroDeTarefas(
      this.props.tarefas,
      this.props.filtroVisib
    );
    return (
      <div>
        <TarefaForm onSubmit={(texto) => this._onFormSubmit(texto)} />

        <ul>
          {this._renderTarefas(tarefasFiltradas)}
        </ul>

        <FiltrosLista filtrarClick={(filtragem) => this._onFiltroClick(filtragem)} />

      </div>
    );
  }

}

const mapStateToProps = ({ tarefas, filtroVisib }) => {
  return {
    tarefas,
    filtroVisib
  }
}

export default connect(
  mapStateToProps,
  {
    addTarefa,
    toggleTarefa,
    filtrar
  }
)(TarefasApp);