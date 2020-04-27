import React, { FC } from 'react';

import { TreeInterface } from './tree-manager/shared/models/TreeInterface';
import { TreeManager } from './tree-manager/TreeManager';
import './App.css';

const item: TreeInterface = {
  id: "0",
  label: "Item 01",
  isSelected: false,
  canDropList:['ITEM'],
  childs: [
    {
      id: "1", label: "Item 02", isSelected: false, canDropList:['ITEM'], childs: [
        {
          id: "2", label: "Item 01", isSelected: false, canDropList:['ITEM'], childs: [
            {
              id: "3", label: "Item 01", isSelected: false, canDropList:['ITEM'], childs: [
                {
                  id: "4", label: "Item 01", isSelected: false, canDropList:['ITEM'], childs: [
                    {
                      id: "5", label: "Item 01", isSelected: false, canDropList:['ITEM'], childs: [
                        {
                          id: "6", label: "Item 03", isSelected: false, canDropList:['ITEM'], childs: [
                            {
                              id: "7", label: "Item 01", isSelected: false, canDropList:['ITEM'], childs: [
                                {
                                  id: "8", label: "Item 01", isSelected: false, canDropList:['ITEM'], childs: [
                                    {
                                      id: "9", label: "Item 01", isSelected: false, canDropList:['ITEM'], childs: [
                                        {
                                          id: "10", label: "Item 01", isSelected: false, canDropList:['ITEM'], childs: [
                                            {
                                              id: "11", label: "Item 04", isSelected: false, canDropList:['ITEM'], childs: [
                                                {
                                                  id: "12", label: "Item 01", isSelected: false, canDropList:['ITEM'], childs: [
                                                    {
                                                      id: "13", label: "Item 01", isSelected: false, canDropList:['ITEM'], childs: [
                                                        {
                                                          id: "14", label: "Item 01", isSelected: false, canDropList:['ITEM'], childs: [
                                                            {
                                                              id: "15", label: "Item 01", isSelected: false, canDropList:['ITEM'], childs: [
                                                                {
                                                                  id: "16", label: "Item 05", isSelected: false, canDropList:['ITEM'], childs: [
                                                                    {
                                                                      id: "17", label: "Item 01", isSelected: false, canDropList:['ITEM'], childs: [
                                                                        {
                                                                          id: "18", label: "Item 01", isSelected: false, canDropList:['ITEM'], childs: [
                                                                            {
                                                                              id: "19", label: "Item 01", isSelected: false, canDropList:['ITEM'], childs: [
                                                                                { id: "20", label: "Item 01", isSelected: false, canDropList:['ITEM'], childs: [], type: 'ITEM', nodeExpanded: false }
                                                                              ], type: 'ITEM', nodeExpanded: false
                                                                            }
                                                                          ], type: 'ITEM', nodeExpanded: false
                                                                        }
                                                                      ], type: 'ITEM', nodeExpanded: false
                                                                    }
                                                                  ], type: 'ITEM', nodeExpanded: false
                                                                },
                                                              ], type: 'ITEM', nodeExpanded: false
                                                            }
                                                          ], type: 'ITEM', nodeExpanded: false
                                                        }
                                                      ], type: 'ITEM', nodeExpanded: false
                                                    }
                                                  ], type: 'ITEM', nodeExpanded: false
                                                }
                                              ], type: 'ITEM', nodeExpanded: false
                                            },
                                          ], type: 'ITEM', nodeExpanded: false
                                        }
                                      ], type: 'ITEM', nodeExpanded: false
                                    }
                                  ], type: 'ITEM', nodeExpanded: false
                                }
                              ], type: 'ITEM', nodeExpanded: false
                            }
                          ], type: 'ITEM', nodeExpanded: false
                        },
                      ], type: 'ITEM', nodeExpanded: false
                    }
                  ], type: 'ITEM', nodeExpanded: false
                }
              ], type: 'ITEM', nodeExpanded: false
            }
          ], type: 'ITEM', nodeExpanded: false, isDisabledSelect: true,
        }
      ], type: 'ITEM', nodeExpanded: false,  isAllowedToggleNodeExpand: true, isDisabledSelect: false
    },
    { id: "21", label: "Item 03", isSelected: false, canDropList:['ITEM'], childs: [], type: 'ITEM', nodeExpanded: false, isDisabledDrag: false, isDisabledSelect: true },
    { id: "22", label: "Item 04", isSelected: false, canDropList:['ITEM'], childs: [], type: 'ITEM', nodeExpanded: false, isDisabledDrag: true, isDisabledDrop: true, isDisabledSelect: false, hasError: true },
  ],
  type: 'ITEM',
  nodeExpanded: false
};

const App: FC = () => {
  return (
    <div className="App">
      <div style={{ justifyContent: "center", flex: 1, display: "flex", }}>
        <div style={{ width: 300, height: 500, alignSelf: "center", backgroundColor: "#1E1E1E", flexDirection: "column" }}>

          <TreeManager
            itemBase={item}
            isUseDrag={true}
            isUseDrop={true}
            onClick={(id: string) => { console.log(id) }}
            onContextMenu={(id, e) => { e.preventDefault() }}
            onDoubleClick={(id, item, e) => { console.log(id) }}
            onDropItem={(targetId, droppedId, droppedItem) => {
              console.log(targetId);
              console.log(droppedId);
              console.log(droppedItem);
            }}
          />

        </div>
      </div>
    </div>
  );
}

export default App;
