import React from 'react';

import { ITreeManagerProps, ITreeManagerEvents } from './shared/interfaces';
import { EmptyFeedback } from './components';
import { useConfigs } from './shared/hooks';
import './TreeManagerBase.css';

interface TreeManagerBaseProps extends ITreeManagerProps, ITreeManagerEvents {

}
export const TreeManagerBase: React.FC<TreeManagerBaseProps> = ({ items, childrenWhenEmpty, onFocus, onContextMenu, onKeyDown }) => {
    const { showEmptyMessage } = useConfigs();

    return (
        <div
            tabIndex={0}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            className={"tree-base"}
        >

            <EmptyFeedback
                children={childrenWhenEmpty}
                onContextMenu={e => onContextMenu && onContextMenu(undefined, e)}
                show={!!((childrenWhenEmpty && items.length === 0) || showEmptyMessage)}
            />
        </div>
    );
}
