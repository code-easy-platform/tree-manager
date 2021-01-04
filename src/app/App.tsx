import React, { FC, useEffect, useState } from 'react';

import { TreeManager, CustomDragLayer, ITreeItem } from './tree-manager';
import { Items } from './Mock';
import './App.css';

const App: FC = () => {
  const [items, setItems] = useState<ITreeItem[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setItems(Items);
    }, 500);
  }, [setItems]);

  return (
    <div className="App">
      <div style={{ justifyContent: "center", flex: 1, display: "flex", }}>
        <div style={{ width: 300, height: 500, alignSelf: "center", backgroundColor: "#1E1E1E", flexDirection: "column", boxShadow: 'black 0px 0px 10px' }}>

          <TreeManager
            // key="MyKey"
            items={items}
            // onFocus={console.log}
            // onKeyDown={console.log}
            // onDropItem={console.log}
            // onExpandNode={console.log}
            // onContextMenu={console.log}
            // childrenWhenEmpty={"Right click here to add features"}
            configs={{
              // id: 'MyTree',
              // leftPadding: 1,
              isUseDrag: true,
              isUseDrop: true,
              // errorTextColor: 'red',
              // showEmptyMessage: true,
              // warningTextColor: 'green',
              // focusedItemBackgroundColor: 'orange',
              // activeItemBackgroundColor: 'darkblue',
              // editingItemBackgroundColor: 'darkred',
              customDragLayer: item => <CustomDragLayer children={item} />,
            }}
          />

        </div>
      </div>
    </div>
  );
}

export default App;
