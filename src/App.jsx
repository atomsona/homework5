import React from 'react';
import HiddenWord from './components/HiddenWord/HiddenWord';
import Timer from './components/Timer/Timer';
import ClickCounter from './components/ClickCounter/ClickCounter';

const App = () => {
  return (
    <div>
      <HiddenWord />
      <Timer />
      <ClickCounter />
    </div>
  );
};

export default App;