import React, { FC } from 'react';

import './App.scss';
import { TreeManager } from './tree-manager/TreeManager';

const App: FC = () => {
  return (
    <div className="App">
      <TreeManager />
    </div>
  );
}

export default App;
