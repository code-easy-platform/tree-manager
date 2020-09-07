import React from 'react';
import { TreeItem } from '../tree-item/TreeItem';
import { ITreeItem } from '../../shared/interfaces';
import { useItems } from '../../shared/hooks';

interface TreeProps {
    item: ITreeItem;
}
export const Tree: React.FC<TreeProps> = ({ item }) => {
    const { itemsByAscId } = useItems();

    return (
        <>
            <TreeItem {...item} />
            {(item.nodeExpanded && item.id) &&
                itemsByAscId(item.id).map((child, index) => (
                    <Tree
                        key={index}
                        item={child}
                    />
                ))
            }
        </>
    );
}
