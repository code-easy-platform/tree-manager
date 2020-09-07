import React, { FC } from 'react';
import { IconAction } from 'code-easy-components';

import { ITreeItem } from './tree-manager/shared/interfaces';
import { TreeManager } from './tree-manager';
import './App.css';

const itensBase: ITreeItem[] = [
  {
    id: "0",
    icon: IconAction,
    type: 'ITEM',
    label: "Item 01",
    isSelected: false,
    hasWarning: false,
    nodeExpanded: false,
    showExpandIcon: false,
    canDropList: ['ITEM'],
    isDisabledClick: true,
    isDisabledSelect: true,
    isDisabledDoubleClick: true,
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
                                                                                  { id: "20", label: "Item 01", isSelected: false, canDropList: ['ITEM'], childs: [], type: 'ITEM', nodeExpanded: false, hasWarning: true }
                                                                                ], type: 'ITEM', nodeExpanded: false, hasWarning: false
                                                                              }
                                                                            ], type: 'ITEM', nodeExpanded: false, hasWarning: false
                                                                          }
                                                                        ], type: 'ITEM', nodeExpanded: false, hasWarning: false
                                                                      }
                                                                    ], type: 'ITEM', nodeExpanded: false, hasWarning: false
                                                                  },
                                                                ], type: 'ITEM', nodeExpanded: false, hasWarning: false
                                                              }
                                                            ], type: 'ITEM', nodeExpanded: false, hasWarning: false
                                                          }
                                                        ], type: 'ITEM', nodeExpanded: false, hasWarning: false
                                                      }
                                                    ], type: 'ITEM', nodeExpanded: false, hasWarning: false
                                                  }
                                                ], type: 'ITEM', nodeExpanded: false, hasWarning: false
                                              },
                                            ], type: 'ITEM', nodeExpanded: false, hasWarning: false
                                          }
                                        ], type: 'ITEM', nodeExpanded: false, hasWarning: false
                                      }
                                    ], type: 'ITEM', nodeExpanded: false, hasWarning: false
                                  }
                                ], type: 'ITEM', nodeExpanded: false, hasWarning: false
                              }
                            ], type: 'ITEM', nodeExpanded: false, hasWarning: false
                          },
                        ], type: 'ITEM', nodeExpanded: false, hasWarning: false
                      }
                    ], type: 'ITEM', nodeExpanded: false, hasWarning: false
                  }
                ], type: 'ITEM', nodeExpanded: false, hasWarning: false
              }
            ], type: 'ITEM', nodeExpanded: false, isDisabled: true, hasWarning: false
          }
        ], type: 'ITEM', nodeExpanded: false, isAllowedToggleNodeExpand: true, isDisabled: false, hasWarning: false
      },
      { id: "21", icon: IconAction, label: "Item 03", isSelected: false, canDropList: ['ITEM'], childs: [], type: 'ITEM', nodeExpanded: false, isDisabledDrag: false, isDisabled: true, hasWarning: false },
      { id: "22", icon: IconAction, label: "Item 04", isSelected: false, canDropList: ['ITEM'], childs: [], type: 'ITEM', nodeExpanded: false, isDisabledDrag: true, hasWarning: false, isDisabledDrop: true, isDisabled: false, hasError: true },
    ]
  },
  {
    id: "0",
    type: 'ITEM',
    label: "Item 01",
    isSelected: false,
    hasWarning: false,
    nodeExpanded: false,
    canDropList: ['ITEM'],
    isDisabledSelect: true,
    childs: [
      { id: "30", label: "Item 30", isSelected: false, canDropList: ['ITEM'], childs: [], type: 'ITEM', nodeExpanded: false, isDisabledDrag: false, isDisabled: true, hasWarning: true },
      { id: "31", label: "Item 31", isSelected: false, canDropList: ['ITEM'], childs: [], type: 'ITEM', nodeExpanded: false, isDisabledDrag: true, isDisabledDrop: true, isDisabled: false, hasError: true, hasWarning: false },
    ],
  }
];

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
            items={itensBase}
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
