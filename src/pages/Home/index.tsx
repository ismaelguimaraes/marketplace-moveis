import React, { useState } from 'react';

import Header from '../../componentes/Header'

interface Props {
  isItemCard?: boolean;
}

const Home: React.FC<Props> = (props) => {

  return (
    <>
      <Header />
      <br/>
      <button onClick={() => {}}>Adicionar carrinho</button>
    </>
  )
};

export default Home;
