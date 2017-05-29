import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addTarefa,
  toggleTarefa,
  filtrar,
  ordenar
} from '../../../actions';

import Tarefa from './Tarefa';
import TarefaForm from './TarefaForm';

import FiltrosLista from '../../filtros/components/FiltrosLista';
import FiltroOrdenacao from '../../filtros/components/FiltroOrdenacao';

import { filtroDeTarefas, ordenador } from '../../filtros/helpers';

class TarefasApp extends Component {

  _onFormSubmit = (valorCampoTexto) => {
    this.props.addTarefa(valorCampoTexto);
  }

  _onFiltroClick = (filtro) => {
    this.props.filtrar(filtro);
  }

  _onOrdenarClick = (ordenador) => {
    this.props.ordenar(ordenador);
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
      ordenador(this.props.tarefas, this.props.ordenacaoVisib),
      this.props.filtroVisib
    );
    return (
      <div>
        <TarefaForm onSubmit={(texto) => this._onFormSubmit(texto)} />

        <FiltroOrdenacao ordenarClick={(ordenador) => this._onOrdenarClick(ordenador) } />

        <ul>
          {this._renderTarefas(tarefasFiltradas)}
        </ul>

        <FiltrosLista filtrarClick={(filtragem) => this._onFiltroClick(filtragem)} />

      </div>
    );
  }

}

const mapStateToProps = ({ tarefas, filtroVisib, ordenacaoVisib }) => {
  return {
    tarefas,
    filtroVisib,
    ordenacaoVisib
  }
}

export default connect(
  mapStateToProps,
  {
    addTarefa,
    toggleTarefa,
    filtrar,
    ordenar
  }
)(TarefasApp);