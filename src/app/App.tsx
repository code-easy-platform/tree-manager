import React, { FC } from 'react';

import './App.scss';
import { TreeManager } from './tree-manager/TreeManager';
import { TreeInterface } from './tree-manager/shared/models/TreeInterface';
import { TreeItensTypes } from './tree-manager/shared/models/TreeItensTypes';

const itens: TreeInterface[] = [
  {
    itemId: "1", itemLabel: "Item 02", isSelected: false, itemChilds: [
      {
        itemId: "2", itemLabel: "Item 01", isSelected: false, itemChilds: [
          {
            itemId: "3", itemLabel: "Item 01", isSelected: false, itemChilds: [
              {
                itemId: "4", itemLabel: "Item 01", isSelected: false, itemChilds: [
                  {
                    itemId: "5", itemLabel: "Item 01", isSelected: false, itemChilds: [
                      {
                        itemId: "6", itemLabel: "Item 03", isSelected: false, itemChilds: [
                          {
                            itemId: "7", itemLabel: "Item 01", isSelected: false, itemChilds: [
                              {
                                itemId: "8", itemLabel: "Item 01", isSelected: false, itemChilds: [
                                  {
                                    itemId: "9", itemLabel: "Item 01", isSelected: false, itemChilds: [
                                      {
                                        itemId: "10", itemLabel: "Item 01", isSelected: false, itemChilds: [
                                          {
                                            itemId: "11", itemLabel: "Item 04", isSelected: false, itemChilds: [
                                              {
                                                itemId: "12", itemLabel: "Item 01", isSelected: false, itemChilds: [
                                                  {
                                                    itemId: "13", itemLabel: "Item 01", isSelected: false, itemChilds: [
                                                      {
                                                        itemId: "14", itemLabel: "Item 01", isSelected: false, itemChilds: [
                                                          {
                                                            itemId: "15", itemLabel: "Item 01", isSelected: false, itemChilds: [
                                                              {
                                                                itemId: "16", itemLabel: "Item 05", isSelected: false, itemChilds: [
                                                                  {
                                                                    itemId: "17", itemLabel: "Item 01", isSelected: false, itemChilds: [
                                                                      {
                                                                        itemId: "18", itemLabel: "Item 01", isSelected: false, itemChilds: [
                                                                          {
                                                                            itemId: "19", itemLabel: "Item 01", isSelected: false, itemChilds: [
                                                                              { itemId: "20", itemLabel: "Item 01", isSelected: false, itemChilds: [], itemType: TreeItensTypes.folder, nodeExpanded: false }
                                                                            ], itemType: TreeItensTypes.folder, nodeExpanded: false
                                                                          }
                                                                        ], itemType: TreeItensTypes.folder, nodeExpanded: false
                                                                      }
                                                                    ], itemType: TreeItensTypes.folder, nodeExpanded: false
                                                                  }
                                                                ], itemType: TreeItensTypes.folder, nodeExpanded: false
                                                              },
                                                            ], itemType: TreeItensTypes.folder, nodeExpanded: false
                                                          }
                                                        ], itemType: TreeItensTypes.folder, nodeExpanded: false
                                                      }
                                                    ], itemType: TreeItensTypes.folder, nodeExpanded: false
                                                  }
                                                ], itemType: TreeItensTypes.folder, nodeExpanded: false
                                              }
                                            ], itemType: TreeItensTypes.folder, nodeExpanded: false
                                          },
                                        ], itemType: TreeItensTypes.folder, nodeExpanded: false
                                      }
                                    ], itemType: TreeItensTypes.folder, nodeExpanded: false
                                  }
                                ], itemType: TreeItensTypes.folder, nodeExpanded: false
                              }
                            ], itemType: TreeItensTypes.folder, nodeExpanded: false
                          }
                        ], itemType: TreeItensTypes.folder, nodeExpanded: false
                      },
                    ], itemType: TreeItensTypes.folder, nodeExpanded: false
                  }
                ], itemType: TreeItensTypes.folder, nodeExpanded: false
              }
            ], itemType: TreeItensTypes.folder, nodeExpanded: false
          }
        ], itemType: TreeItensTypes.folder, nodeExpanded: false
      }
    ], itemType: TreeItensTypes.folder, nodeExpanded: false
  },
  { itemId: "21", itemLabel: "Item 03", isSelected: false, itemChilds: [], itemType: TreeItensTypes.file, nodeExpanded: false },
  { itemId: "22", itemLabel: "Item 04", isSelected: false, itemChilds: [], itemType: TreeItensTypes.file, nodeExpanded: false },

];

const App: FC = () => {
  return (
    <div className="App">
      <div style={{ justifyContent: "center", flex: 1, display: "flex", }}>
        <div style={{ width: 300, height: 500, alignSelf: "center", backgroundColor: "#1E1E1E", flexDirection: "column" }}>

          <TreeManager onClick={(id: string) => { /* alert(id)  */}} itemBase={{ itemId: "0", itemLabel: "Item 01", isSelected: false, itemChilds: itens, itemType: TreeItensTypes.folder, nodeExpanded: false }} />

        </div>
      </div>
    </div>
  );
}

export default App;
