import React, { useCallback } from 'react';

import { EmptyFeedback, OnEditListener, OnSelectListener, Tree } from './components';
import { ITreeManagerProps, ITreeManagerEvents } from './shared/interfaces';
import { useBaseItems, useConfigs } from './shared/hooks';
import './TreeManagerBase.css';

interface TreeManagerBaseProps extends Omit<ITreeManagerProps, 'items'>, ITreeManagerEvents { }
export const TreeManagerBase: React.FC<TreeManagerBaseProps> = ({ childrenWhenEmpty, onFocus, onContextMenu, onKeyDown, onSelect, onEdit }) => {
    const { showEmptyMessage, id } = useConfigs();
    const baseItems = useBaseItems();

    const handleContextMenu = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        onContextMenu && onContextMenu(undefined, e);
    }, [onContextMenu]);

    const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = useCallback(e => {
        e.stopPropagation();
        e.preventDefault();

        const allTreeItems = document.querySelectorAll(`#${id} [tree-item] > .tree-item-label[tabIndex="0"]`);
        if (allTreeItems.length === 0) return;

        switch (e.key) {
            case 'ArrowUp':
                (allTreeItems[0] as any)?.click();
                (allTreeItems[0] as any)?.focus();
                break;
            case 'ArrowDown':
                (allTreeItems[0] as any)?.click();
                (allTreeItems[0] as any)?.focus();
                break;
            default: break;
        }

        onKeyDown && onKeyDown(e);
    }, [id, onKeyDown]);

    return (
        <div
            id={id}
            tabIndex={0}
            onFocus={onFocus}
            className="tree-base"
            onKeyDown={handleKeyDown}
            onContextMenu={handleContextMenu}
        >
            {baseItems.length > 0 && baseItems.map((item, index) => (
                <Tree
                    key={index}
                    item={item}
                    onContextMenu={onContextMenu}
                />
            ))}

            {!((childrenWhenEmpty && baseItems.length === 0) || showEmptyMessage) &&
                <div style={{ padding: 64 }} />
            }

            <EmptyFeedback
                children={childrenWhenEmpty}
                onContextMenu={handleContextMenu}
                show={!!((childrenWhenEmpty && baseItems.length === 0) || showEmptyMessage)}
            />

            <OnEditListener onEdit={onEdit} />
            <OnSelectListener onSelect={onSelect} />
        </div>
    );
}
