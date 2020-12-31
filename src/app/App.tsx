import React, { FC } from 'react';

import { TreeManager, CustomDragLayer } from './tree-manager';
import { items } from './Mock';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <div style={{ justifyContent: "center", flex: 1, display: "flex", }}>
        <div style={{ width: 300, height: 500, alignSelf: "center", backgroundColor: "#1E1E1E", flexDirection: "column", boxShadow: 'black 0px 0px 10px' }}>

          <TreeManager
            items={items}
            // onFocus={console.log}
            // onKeyDown={console.log}
            onContextMenu={console.log}
            // onChangeItems={console.log}
            // childrenWhenEmpty={"Right click here to add features"}
            configs={{
              id: 'MyTree',
              isUseDrag: true,
              isUseDrop: true,
              // showEmptyMessage: false,
              customDragLayer: (item) => (
                <CustomDragLayer children={item} />
              )
            }}
          />

        </div>
      </div>
    </div>
  );
}

export default App;
