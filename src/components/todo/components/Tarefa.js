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
    <div
      onClick={onClick}
      className={style.tarefaLine}
    >
      <span className={finalizada ? style.tarefaFeita : style.tarefaIncompleta}>{texto}</span>
      <a href='#' className={style.deleteBtn} onClick={onDelTarefa}>[X]</a>
    </div>
  );
};

export default Tarefa;