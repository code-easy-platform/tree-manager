import React, { FC, useState } from 'react';

import { TreeInterface } from './shared/models/TreeInterface';
import './TreeManager.scss';
import { TreeItem } from './shared/components/TreeItem';

interface TreeProps {
    item: TreeInterface,
}

export const TreeManager: FC<TreeProps> = ({ item }) => {
    const [state, setState] = useState<TreeInterface>(item);

    return (
        <>
            <TreeItem
                itemTree={state}
                onClick={(e) => setState({...state, nodeExpanded: !state.nodeExpanded})}
            />
            {state.nodeExpanded &&
                state.itemChilds.map((item: TreeInterface) => {
                    return (
                        <TreeManager item={item} />
                    );
                })
            }
        </>
    );
}
