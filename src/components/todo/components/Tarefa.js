import React from 'react';
import style from './Tarefa.scss';

const Tarefa = ({ 
  id, 
  texto,
  finalizada,
  onClick
}) => {
  return(
    <li
      onClick={onClick}
      className={finalizada ? style.tarefaFeita : style.tarefaIncompleta}
    >
      {texto}
    </li>
  );
};

export default Tarefa;