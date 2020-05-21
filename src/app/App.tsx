import React, { FC } from 'react';

import { TreeInterface } from './tree-manager/shared/models/TreeInterface';
import { TreeManager } from './tree-manager/TreeManager';
import './App.css';

import action from './tree-manager/shared/icons/action.png';

const itensBase: TreeInterface[] = [
  {
    id: "0",
    icon: action,
    type: 'ITEM',
    label: "Item 01",
    isSelected: false,
    nodeExpanded: false,
    showExpandIcon: false,
    canDropList: ['ITEM'],
    isDisabledSelect: true,
    useCustomIconToExpand: true,
    childs: [
      {
        id: "1", label: "Item 02", isSelected: true, isEditing: true, canDropList: ['ITEM'], childs: [
          {
            id: "2", label: "Item 01", isSelected: false, canDropList: ['ITEM'], childs: [
              {
                id: "3", label: "Item 01", isSelected: false, canDropList: ['ITEM'], childs: [
                  {
                    id: "4", label: "Item 01", isSelected: false, canDropList: ['ITEM'], childs: [
                      {
                        id: "5", label: "Item 01", isSelected: false, canDropList: ['ITEM'], childs: [
                          {
                            id: "6", label: "Item 03", isSelected: false, canDropList: ['ITEM'], childs: [
                              {
                                id: "7", label: "Item 01", isSelected: false, canDropList: ['ITEM'], childs: [
                                  {
                                    id: "8", label: "Item 01", isSelected: false, canDropList: ['ITEM'], childs: [
                                      {
                                        id: "9", label: "Item 01", isSelected: false, canDropList: ['ITEM'], childs: [
                                          {
                                            id: "10", label: "Item 01", isSelected: false, canDropList: ['ITEM'], childs: [
                                              {
                                                id: "11", label: "Item 04", isSelected: false, canDropList: ['ITEM'], childs: [
                                                  {
                                                    id: "12", label: "Item 01", isSelected: false, canDropList: ['ITEM'], childs: [
                                                      {
                                                        id: "13", label: "Item 01", isSelected: false, canDropList: ['ITEM'], childs: [
                                                          {
                                                            id: "14", label: "Item 01", isSelected: false, canDropList: ['ITEM'], childs: [
                                                              {
                                                                id: "15", label: "Item 01", isSelected: false, canDropList: ['ITEM'], childs: [
                                                                  {
                                                                    id: "16", label: "Item 05", isSelected: false, canDropList: ['ITEM'], childs: [
                                                                      {
                                                                        id: "17", label: "Item 01", isSelected: false, canDropList: ['ITEM'], childs: [
                                                                          {
                                                                            id: "18", label: "Item 01", isSelected: false, canDropList: ['ITEM'], childs: [
                                                                              {
                                                                                id: "19", label: "Item 01", isSelected: false, canDropList: ['ITEM'], childs: [
                                                                                  { id: "20", label: "Item 01", isSelected: false, canDropList: ['ITEM'], childs: [], type: 'ITEM', nodeExpanded: false }
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
            ], type: 'ITEM', nodeExpanded: false, isDisabled: true,
          }
        ], type: 'ITEM', nodeExpanded: false, isAllowedToggleNodeExpand: true, isDisabled: false
      },
      { id: "21", icon: action, label: "Item 03", isSelected: false, canDropList: ['ITEM'], childs: [], type: 'ITEM', nodeExpanded: false, isDisabledDrag: false, isDisabled: true },
      { id: "22", icon: action, label: "Item 04", isSelected: false, canDropList: ['ITEM'], childs: [], type: 'ITEM', nodeExpanded: false, isDisabledDrag: true, isDisabledDrop: true, isDisabled: false, hasError: true },
    ]
  },
  {
    id: "0",
    type: 'ITEM',
    label: "Item 01",
    isSelected: false,
    nodeExpanded: false,
    canDropList: ['ITEM'],
    isDisabledSelect: true,
    childs: [
      { id: "30", label: "Item 30", isSelected: false, canDropList: ['ITEM'], childs: [], type: 'ITEM', nodeExpanded: false, isDisabledDrag: false, isDisabled: true },
      { id: "31", label: "Item 31", isSelected: false, canDropList: ['ITEM'], childs: [], type: 'ITEM', nodeExpanded: false, isDisabledDrag: true, isDisabledDrop: true, isDisabled: false, hasError: true },
    ],
  }
];

const App: FC = () => {
  return (
    <div className="App">
      <div style={{ justifyContent: "center", flex: 1, display: "flex", }}>
        <div style={{ width: 300, height: 500, alignSelf: "center", backgroundColor: "#1E1E1E", flexDirection: "column" }}>

          <TreeManager
            isUseDrag={true}
            isUseDrop={true}
            itens={itensBase}
            onFocus={console.log}
            onClick={console.log}
            onKeyDown={console.log}
            onDropItem={console.log}
            onExpandNode={console.log}
            onDoubleClick={console.log}
            onContextMenu={console.log}
          />

        </div>
      </div>
    </div>
  );
}

export default App;
