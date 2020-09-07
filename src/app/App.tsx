import React, { FC } from 'react';

import { TreeManager } from './tree-manager';
import { items } from './Mock';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <div style={{ justifyContent: "center", flex: 1, display: "flex", }}>
        <div style={{ width: 300, height: 500, alignSelf: "center", backgroundColor: "#1E1E1E", flexDirection: "column", boxShadow: 'black 0px 0px 10px' }}>

          <TreeManager
            configs={{
              isUseDrag: true,
              isUseDrop: true,
              showEmptyMessage: true,
            }}
            items={items}
            onFocus={console.log}
            onClick={console.log}
            onKeyDown={console.log}
            onDropItem={console.log}
            onExpandNode={console.log}
            onDoubleClick={console.log}
            onContextMenu={console.log}
          // childrenWhenEmpty={"Right click here to add features"}
          />

        </div>
      </div>
    </div>
  );
}

export default App;
