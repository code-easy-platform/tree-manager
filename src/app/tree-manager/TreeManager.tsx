import React, { FC, useState } from 'react';

import { TreeItensTypes } from './shared/models/TreeItensTypes';
import { TreeInterface } from './shared/models/TreeInterface';
import { Tree } from './shared/components/Tree';
import './TreeManager.scss';

interface TreeManagerProps {
    itemBase: TreeInterface,
    onClick: Function,
    onContextMenu(itemTreeId: string, e: React.MouseEvent<HTMLDivElement, MouseEvent>): void | undefined;
}
export const TreeManager: FC<TreeManagerProps> = ({ itemBase, onClick, onContextMenu }) => {

    const [state, setState] = useState("");

    const onSelect = (id: string, item: TreeInterface) => {
        setState(id);
        onClick(id, item);
    }

    return (
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
                itemIdSelected={state}
                onContextMenu={onContextMenu}
            />
            <div style={{ paddingBottom: 100 }} />
        </div>
    );

}
