import React, { FC } from 'react';
import { TreeInterface } from '../models/TreeInterface';

import arrow_right from './../icons/btn-expand-folder.svg';
import arrow_down from './../icons/btn-collapse-folder.svg';

interface ItemTreeProps {
    itemTree: TreeInterface,
    onClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void | undefined,
    paddingLeft: number,
}
export const TreeItem: FC<ItemTreeProps> = ({ itemTree, onClick, paddingLeft }) => {
    return (
        <div
            onClick={onClick}
            key={itemTree.itemId}
            className="tree-item"
            id={"tree_" + itemTree.itemId}
        >
            <img src={arrow_down} alt="Arrow down" />
            <img src={arrow_right} alt="Arrow right" />
            <div className="item" style={{ paddingLeft: `${paddingLeft}px` }}>{itemTree.itemLabel}</div>
        </div>
    );
}
