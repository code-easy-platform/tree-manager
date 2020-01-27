import React, { FC } from 'react';
import { TreeInterface } from '../models/TreeInterface';

interface ItemTreeProps {
    itemTree: TreeInterface,
    onClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void | undefined,
    paddingLeft: number,
}
export const TreeItem: FC<ItemTreeProps> = ({ itemTree, onClick, paddingLeft }) => {
    return (
        <div
            onClick={onClick}
            key={itemTree.itemId}
            className="tree-item"
            id={"tree_" + itemTree.itemId}
        >
            <div className="item" style={{ paddingLeft: `${paddingLeft}px` }}>{itemTree.itemLabel}</div>
        </div>
    );
}
