import React, { FC } from 'react';
import { TreeInterface } from '../models/TreeInterface';

import { TreeItensTypes } from '../models/TreeItensTypes';
import { Icon } from './icon/icon';

interface ItemTreeProps {
    itemTree: TreeInterface,
    onSelect(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void | undefined,
    paddingLeft: number,
}
export const TreeItem: FC<ItemTreeProps> = ({ itemTree, paddingLeft, onSelect }) => {
    return (
        <div
            onClick={(e: any) => onSelect(e)}
            key={itemTree.itemId}
            className="tree-item"
            id={"tree_" + itemTree.itemId}
            style={{ backgroundColor: (itemTree.isSelected ? "#6060a730" : "") }}
        >
            <div className="item" style={{ paddingLeft: `${paddingLeft}px` }}>
                {itemTree.itemType === TreeItensTypes.folder &&
                    <Icon
                        iconName={itemTree.nodeExpanded ? "btn-collapse-folder" : "btn-expand-folder"}
                    />
                }
                {itemTree.itemType === TreeItensTypes.file &&
                    <Icon />
                }
                {itemTree.itemLabel}
            </div>
        </div>
    );
}
