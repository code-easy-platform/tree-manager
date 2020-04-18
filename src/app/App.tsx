import React, { FC, useState } from 'react';

import { TreeItensTypes } from './tree-manager/shared/models/TreeItensTypes';
import { TreeInterface } from './tree-manager/shared/models/TreeInterface';
import { TreeManager } from './tree-manager/TreeManager';
import './App.scss';

const item: TreeInterface = {
  id: "0",
  label: "Item 01",
  isSelected: false,
  childs: [
    {
      id: "1", label: "Item 02", isSelected: false, childs: [
        {
          id: "2", label: "Item 01", isSelected: false, childs: [
            {
              id: "3", label: "Item 01", isSelected: false, childs: [
                {
                  id: "4", label: "Item 01", isSelected: false, childs: [
                    {
                      id: "5", label: "Item 01", isSelected: false, childs: [
                        {
                          id: "6", label: "Item 03", isSelected: false, childs: [
                            {
                              id: "7", label: "Item 01", isSelected: false, childs: [
                                {
                                  id: "8", label: "Item 01", isSelected: false, childs: [
                                    {
                                      id: "9", label: "Item 01", isSelected: false, childs: [
                                        {
                                          id: "10", label: "Item 01", isSelected: false, childs: [
                                            {
                                              id: "11", label: "Item 04", isSelected: false, childs: [
                                                {
                                                  id: "12", label: "Item 01", isSelected: false, childs: [
                                                    {
                                                      id: "13", label: "Item 01", isSelected: false, childs: [
                                                        {
                                                          id: "14", label: "Item 01", isSelected: false, childs: [
                                                            {
                                                              id: "15", label: "Item 01", isSelected: false, childs: [
                                                                {
                                                                  id: "16", label: "Item 05", isSelected: false, childs: [
                                                                    {
                                                                      id: "17", label: "Item 01", isSelected: false, childs: [
                                                                        {
                                                                          id: "18", label: "Item 01", isSelected: false, childs: [
                                                                            {
                                                                              id: "19", label: "Item 01", isSelected: false, childs: [
                                                                                { id: "20", label: "Item 01", isSelected: false, childs: [], type: TreeItensTypes.folder, nodeExpanded: false }
                                                                              ], type: TreeItensTypes.folder, nodeExpanded: false
                                                                            }
                                                                          ], type: TreeItensTypes.folder, nodeExpanded: false
                                                                        }
                                                                      ], type: TreeItensTypes.folder, nodeExpanded: false
                                                                    }
                                                                  ], type: TreeItensTypes.folder, nodeExpanded: false
                                                                },
                                                              ], type: TreeItensTypes.folder, nodeExpanded: false
                                                            }
                                                          ], type: TreeItensTypes.folder, nodeExpanded: false
                                                        }
                                                      ], type: TreeItensTypes.folder, nodeExpanded: false
                                                    }
                                                  ], type: TreeItensTypes.folder, nodeExpanded: false
                                                }
                                              ], type: TreeItensTypes.folder, nodeExpanded: false
                                            },
                                          ], type: TreeItensTypes.folder, nodeExpanded: false
                                        }
                                      ], type: TreeItensTypes.folder, nodeExpanded: false
                                    }
                                  ], type: TreeItensTypes.folder, nodeExpanded: false
                                }
                              ], type: TreeItensTypes.folder, nodeExpanded: false
                            }
                          ], type: TreeItensTypes.folder, nodeExpanded: false
                        },
                      ], type: TreeItensTypes.folder, nodeExpanded: false
                    }
                  ], type: TreeItensTypes.folder, nodeExpanded: false
                }
              ], type: TreeItensTypes.folder, nodeExpanded: false
            }
          ], type: TreeItensTypes.folder, nodeExpanded: false
        }
      ], type: TreeItensTypes.folder, nodeExpanded: false, isDisabledSelect: true
    },
    { id: "21", label: "Item 03", isSelected: false, childs: [], type: TreeItensTypes.file, nodeExpanded: false, isDisabledDrag: false, isDisabledSelect: true },
    { id: "22", label: "Item 04", isSelected: false, childs: [], type: TreeItensTypes.file, nodeExpanded: false,
    isDisabledDrag: true, isDisabledDrop: true, isDisabledSelect: false, hasError: true },
  ],
  type: TreeItensTypes.folder,
  nodeExpanded: false
};

const App: FC = () => {
  const [state, setState] = useState({ item });

  return (
    <div className="App">
      <div style={{ justifyContent: "center", flex: 1, display: "flex", }}>
        <div style={{ width: 300, height: 500, alignSelf: "center", backgroundColor: "#1E1E1E", flexDirection: "column" }}>

          <TreeManager
            isUseDrag={true}
            isUseDrop={true}
            onDropItem={(targetId, droppedId, droppedItem) => {
              console.log(targetId);
              console.log(droppedId);
              console.log(droppedItem);

              if (false)
                setState(state);
            }}
            itemBase={state.item}
            onClick={(id: string) => { console.log(id) }}
            onContextMenu={(id, e) => { e.preventDefault() }}
            onDoubleClick={(id, item, e) => { console.log(id) }}
          />

        </div>
      </div>
    </div>
  );
}

export default App;
