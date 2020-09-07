import React from 'react';

import { ITreeItem } from '../../shared/interfaces';

interface TreeItemProps extends ITreeItem {

}
export const TreeItem: React.FC<TreeItemProps> = ({ id, label }) => {

    return (
        <div>
            <input id={id} name="tree-item" type="radio" />
            <label htmlFor={id}>{label}</label>
        </div>
    );
}
