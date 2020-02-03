import React, { FC } from 'react';
import { TreeInterface } from '../models/TreeInterface';

import { TreeItensTypes } from '../models/TreeItensTypes';
import { Icon } from './icon/icon';

interface ItemTreeProps {
    paddingLeft: number,
    itemTree: TreeInterface,
    onSelect(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void | undefined,
    onContextMenu(itemTreeId: string, e: React.MouseEvent<HTMLDivElement, MouseEvent>): void | undefined,
}
export const TreeItem: FC<ItemTreeProps> = ({ itemTree, paddingLeft, onSelect, onContextMenu }) => {

    // Vai mandar para fora da arvore qual o id do item que foi clicado.
    const onContext = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        onContextMenu(itemTree.itemId, e);
    }

    return (
        <div
            className="tree-item"
            key={itemTree.itemId}
            onContextMenu={onContext}
            id={"tree_" + itemTree.itemId}
            onClick={(e: any) => onSelect(e)}
            style={{ backgroundColor: (itemTree.isSelected ? "#6060a730" : "") }}
        >
            <div className="item" style={{ paddingLeft: `${paddingLeft}px` }}>
                {itemTree.itemType === TreeItensTypes.folder &&
                    <Icon iconName={itemTree.nodeExpanded ? "btn-collapse-folder" : "btn-expand-folder"} />
                }
                {itemTree.itemType === TreeItensTypes.file &&
                    <Icon />
                }
                {itemTree.itemLabel}
            </div>
        </div>
    );
}
