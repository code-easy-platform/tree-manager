import React from 'react';
import { TreeItem } from '../tree-item/TreeItem';
import { ITreeItem } from '../../shared/interfaces';
import { useItems } from '../../shared/hooks';

interface TreeProps {
    item: ITreeItem;
    paddingLeft?: number;
    disabledToDrop?: string[];
}
export const Tree: React.FC<TreeProps> = ({ item, paddingLeft = 0, disabledToDrop = [] }) => {
    const { itemsByAscId } = useItems();

    const childs = itemsByAscId(item.id);

    return (
        <>
            <TreeItem
                {...item}
                paddingLeft={paddingLeft}
                disabledToDrop={[...disabledToDrop]}
                showExpandIcon={childs.length > 0 && (item.showExpandIcon === undefined ? true : item.showExpandIcon)}
            />
            {(item.nodeExpanded && item.id) &&
                childs.map((child, index) => (
                    <Tree
                        key={index}
                        item={child}
                        paddingLeft={paddingLeft + 16}
                        disabledToDrop={[
                            ...disabledToDrop,
                            String(item.id),
                        ]}
                    />
                ))
            }
        </>
    );
}
