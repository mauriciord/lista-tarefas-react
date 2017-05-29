import React from 'react';
import style from './Tarefa.scss';

const Tarefa = ({ 
  id, 
  texto,
  finalizada,
  onClick,
  onDelTarefa
}) => {
  return(
    <li
      onClick={onClick}
      className={finalizada ? style.tarefaFeita : style.tarefaIncompleta}
    >
      {texto}
      {' - '}<a href='#' onClick={onDelTarefa}>Excluir</a>
    </li>
  );
};

export default Tarefa;