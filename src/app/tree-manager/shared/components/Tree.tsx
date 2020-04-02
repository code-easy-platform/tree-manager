import React, { FC, useState, useEffect } from 'react';
import { TreeInterface } from '../models/TreeInterface';
import { TreeItem } from './TreeItem';

interface TreeProps {
    isUseDrop: boolean;
    isUseDrag: boolean;
    item: TreeInterface;
    paddingLeft: number;
    onClick(itemTreeId: string, item: TreeInterface, e: React.MouseEvent<HTMLDivElement, MouseEvent>): void | undefined;
    onDoubleClick(itemTreeId: string, item: TreeInterface, e: React.MouseEvent<HTMLDivElement, MouseEvent>): void | undefined;
    onContextMenu(itemTreeId: string, e: React.MouseEvent<HTMLDivElement, MouseEvent>): void | undefined;
    onDropItem(targetItemId: string, dropppedItemId: string, droppedItemProps: any): void;
    itemIdSelected: string;
}
export const Tree: FC<TreeProps> = ({ item, paddingLeft = 0, onClick, onContextMenu, onDoubleClick, onDropItem, itemIdSelected, isUseDrag, isUseDrop }) => {
    item.isSelected = itemIdSelected === item.itemId;

    const [state, setState] = useState<TreeInterface>(item);
    useEffect(() => {
        setState(item);
    }, [item]);

    return (<>
        <TreeItem
            isUseDrag={isUseDrag}
            isUseDrop={isUseDrop}
            onDropItem={onDropItem}
            onContextMenu={onContextMenu}
            onDoubleClick={onDoubleClick}
            paddingLeft={paddingLeft} itemTree={state}
            onSelect={(_, e) => {
                setState({
                    ...state,
                    nodeExpanded: !state.nodeExpanded,
                });
                onClick(item.itemId, item, e);
            }}
        />
        {state.nodeExpanded &&
            state.itemChilds.map((item: TreeInterface) => {
                return (<Tree
                    item={item}
                    onClick={onClick}
                    isUseDrag={isUseDrag}
                    isUseDrop={isUseDrop}
                    onDropItem={onDropItem}
                    onDoubleClick={onDoubleClick}
                    onContextMenu={onContextMenu}
                    paddingLeft={paddingLeft + 10}
                    itemIdSelected={itemIdSelected}
                />);
            })}
    </>);
};
