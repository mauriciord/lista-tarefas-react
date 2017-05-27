import React from 'react';

const Filtro = ({ filtro, filtrar, children }) => (
  <a
    href='#'
    onClick={(evt) => {
      evt.preventDefault();
      filtrar(filtro);
    }}
  >
    {children}
  </a>
);

export default Filtro;