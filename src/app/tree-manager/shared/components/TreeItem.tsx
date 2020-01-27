import React, { FC } from 'react';
import { TreeInterface } from '../models/TreeInterface';

interface ItemTreeProps {
    itemTree: TreeInterface,
    onClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void | undefined,
}
export const TreeItem: FC<ItemTreeProps> = ({ itemTree, onClick }) => {
    return (
        <div
            onClick={onClick}
            key={itemTree.itemId}
            className="tree-item"
            id={"tree_" + itemTree.itemId}
        >
            {itemTree.itemLabel}
        </div>
    );
}
