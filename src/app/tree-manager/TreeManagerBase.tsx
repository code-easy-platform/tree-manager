import React from 'react';

import { ITreeManagerProps, ITreeManagerEvents } from './shared/interfaces';
import './TreeManagerBase.css';

interface TreeManagerBaseProps extends ITreeManagerProps, ITreeManagerEvents {

}
export const TreeManagerBase: React.FC<TreeManagerBaseProps> = ({ items, onFocus, onKeyDown }) => {

    return (
        <div
            tabIndex={0}
            onFocus={onFocus}
            className={"tree-base"}
            onKeyDown={(e: any) => onKeyDown && onKeyDown(e)}
        >

        </div>
    );
}
