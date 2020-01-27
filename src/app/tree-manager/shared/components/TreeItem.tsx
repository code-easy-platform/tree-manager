import React, { FC } from 'react';
import { TreeInterface } from '../models/TreeInterface';

import { TreeItensTypes } from '../models/TreeItensTypes';
import { Icon } from './icon/icon';

interface ItemTreeProps {
    itemTree: TreeInterface,
    onClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void | undefined,
    paddingLeft: number,
}
export const TreeItem: FC<ItemTreeProps> = ({ itemTree, onClick, paddingLeft }) => {
    return (
        <div
            key={itemTree.itemId}
            className="tree-item"
            id={"tree_" + itemTree.itemId}
        >
            <div className="item" style={{ paddingLeft: `${paddingLeft}px` }}>
                {itemTree.itemType === TreeItensTypes.folder &&
                    <Icon
                        onClick={onClick}
                        iconName={itemTree.nodeExpanded ? "btn-collapse-folder" : "btn-expand-folder"}
                    />
                }
                {itemTree.itemLabel}
            </div>
        </div>
    );
}
