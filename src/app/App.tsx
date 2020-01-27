import React, { FC } from 'react';

import './App.scss';
import { TreeManager } from './tree-manager/TreeManager';
import { TreeInterface } from './tree-manager/shared/models/TreeInterface';
import { TreeItensTypes } from './tree-manager/shared/models/TreeItensTypes';

const itens: TreeInterface[] = [
  {itemId: 0, itemLabel: "Item 02", isSelected: false, itemChilds: [], itemType: TreeItensTypes.folder, nodeExpanded: false}
];

const App: FC = () => {
  return (
    <div className="App">
      <div style={{ justifyContent: "center", flex: 1, display: "flex",  }}>
        <div style={{ width: 300, height: 500, alignSelf: "center", backgroundColor: "#1E1E1E", flexDirection: "column" }}>

          <TreeManager item={{itemId: 0, itemLabel: "Item 01", isSelected: false, itemChilds: itens, itemType: TreeItensTypes.folder, nodeExpanded: false}} />
          
        </div>
      </div>
    </div>
  );
}

export default App;
