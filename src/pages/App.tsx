import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
