import React, { FC, useState } from 'react';

import { TreeInterface } from './shared/models/TreeInterface';
import './TreeManager.scss';
import { TreeItem } from './shared/components/TreeItem';
import { TreeItensTypes } from './shared/models/TreeItensTypes';

interface TreeManagerProps {
    itemBase: TreeInterface,
    onClick: Function,
}
export const TreeManager: FC<TreeManagerProps> = ({ itemBase, onClick }) => {

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
                onContextMenu={(e: any) => { }}
                itemIdSelected={state}
            />
            <div style={{ paddingBottom: 100 }} />
        </div>
    );

}

interface TreeProps {
    item: TreeInterface,
    paddingLeft: number,
    onClick: Function,
    onContextMenu(itemTreeId: string, e: React.MouseEvent<HTMLDivElement, MouseEvent>): void | undefined,
    itemIdSelected: string,
}
const Tree: FC<TreeProps> = ({ item, paddingLeft = 0, onClick, onContextMenu, itemIdSelected }) => {
    const [state, setState] = useState<TreeInterface>(item);

    state.isSelected = itemIdSelected === state.itemId;

    return (
        <>
            <TreeItem
                onContextMenu={onContextMenu}
                paddingLeft={paddingLeft}
                itemTree={state}
                onSelect={(e) => {
                    setState({
                        ...state,
                        nodeExpanded: !state.nodeExpanded,
                    });
                    onClick(item.itemId, item);
                }}
            />
            {state.nodeExpanded &&
                state.itemChilds.map((item: TreeInterface) => {
                    return (
                        <Tree itemIdSelected={itemIdSelected} onContextMenu={onContextMenu} onClick={onClick} paddingLeft={paddingLeft + 10} item={item} />
                    );
                })
            }
        </>
    );
}
