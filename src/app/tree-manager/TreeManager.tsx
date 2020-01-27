import React, { FC, useState } from 'react';

import { TreeInterface } from './shared/models/TreeInterface';
import './TreeManager.scss';
import { TreeItem } from './shared/components/TreeItem';
import { TreeItensTypes } from './shared/models/TreeItensTypes';

interface TreeManagerProps { itemBase: TreeInterface }
export const TreeManager: FC<TreeManagerProps> = ({ itemBase }) => {
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
            />
        </div>
    );
}

interface TreeProps {
    item: TreeInterface,
    paddingLeft: number,
}
const Tree: FC<TreeProps> = ({ item, paddingLeft = 0 }) => {
    const [state, setState] = useState<TreeInterface>(item);

    return (
        <>
            <TreeItem
                paddingLeft={paddingLeft}
                itemTree={state}
                onClick={(e) => setState({ ...state, nodeExpanded: !state.nodeExpanded })}
            />
            {state.nodeExpanded &&
                state.itemChilds.map((item: TreeInterface) => {
                    return (
                        <Tree paddingLeft={paddingLeft + 10} item={item} />
                    );
                })
            }
        </>
    );
}
