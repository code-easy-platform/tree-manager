import React, { FC, useState } from 'react';
import { TreeInterface } from '../models/TreeInterface';
import { TreeItem } from './TreeItem';

interface TreeProps {
    item: TreeInterface;
    paddingLeft: number;
    onClick: Function;
    onContextMenu(itemTreeId: string, e: React.MouseEvent<HTMLDivElement, MouseEvent>): void | undefined;
    itemIdSelected: string;
}
export const Tree: FC<TreeProps> = ({ item, paddingLeft = 0, onClick, onContextMenu, itemIdSelected }) => {
    const [state, setState] = useState<TreeInterface>(item);
    state.isSelected = itemIdSelected === state.itemId;
    return (<>
        <TreeItem onContextMenu={onContextMenu} paddingLeft={paddingLeft} itemTree={state} onSelect={(e) => {
            setState({
                ...state,
                nodeExpanded: !state.nodeExpanded,
            });
            onClick(item.itemId, item);
        }} />
        {state.nodeExpanded &&
            state.itemChilds.map((item: TreeInterface) => {
                return (<Tree itemIdSelected={itemIdSelected} onContextMenu={onContextMenu} onClick={onClick} paddingLeft={paddingLeft + 10} item={item} />);
            })}
    </>);
};
