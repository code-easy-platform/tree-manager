import React, { FC, useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import { TreeItensTypes } from './shared/models/TreeItensTypes';
import { TreeInterface } from './shared/models/TreeInterface';
import { Tree } from './shared/components/Tree';
import './TreeManager.scss';

interface TreeManagerProps {
    isUseDrop?: boolean;
    isUseDrag?: boolean;
    itemBase: TreeInterface;
    onClick(itemTreeId: string, item: TreeInterface, e: React.MouseEvent<HTMLDivElement, MouseEvent>): void | undefined;
    onDoubleClick(itemTreeId: string, item: TreeInterface, e: React.MouseEvent<HTMLDivElement, MouseEvent>): void | undefined;
    onContextMenu(itemTreeId: string, e: React.MouseEvent<HTMLDivElement, MouseEvent>): void | undefined;
    onDropItem?(targetItemId: string, dropppedItemId: string, droppedItemProps: any): void;
}
export const TreeManager: FC<TreeManagerProps> = ({ itemBase, onClick, onContextMenu, onDoubleClick, onDropItem = () => { }, isUseDrag = false, isUseDrop = false }) => {

    const [state, setState] = useState({
        clickedId: "",
        itemBase: itemBase
    });

    const clickedId = state.clickedId;
    useEffect(() => {
        setState({ clickedId, itemBase })
    }, [clickedId, itemBase]);

    const onSelect = (id: string, item: TreeInterface, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setState({ ...state, clickedId: id });
        onClick(id, item, e);
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="tree-base">
                <Tree
                    item={{
                        itemId: itemBase.itemId,
                        itemLabel: itemBase.itemLabel,
                        itemChilds: itemBase.itemChilds,
                        itemType: TreeItensTypes.folder,
                        isSelected: itemBase.isSelected,
                        nodeExpanded: itemBase.nodeExpanded,
                    }}
                    paddingLeft={5}
                    onClick={onSelect}
                    isUseDrag={isUseDrag}
                    isUseDrop={isUseDrop}
                    onDropItem={onDropItem}
                    onContextMenu={onContextMenu}
                    onDoubleClick={onDoubleClick}
                    itemIdSelected={state.clickedId}
                />
                <div style={{ paddingBottom: 100 }} />
            </div>
        </DndProvider>
    );

}
