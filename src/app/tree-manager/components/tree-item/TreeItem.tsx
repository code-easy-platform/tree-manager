import React, { useCallback, useRef, useEffect } from 'react';
import { IconCollapsedFolder, IconExpandedFolder } from 'code-easy-components';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { useDrag, useDrop } from 'react-dnd';

import { useItems, useConfigs } from '../../shared/hooks';
import { ITreeItem, IDroppableItem } from '../../shared/interfaces';
import { Icon } from '../icon/icon';

interface TreeItemProps extends ITreeItem {
    paddingLeft: number;
    showExpandIcon: boolean;
    disabledToDrop?: string[];
}
export const TreeItem: React.FC<TreeItemProps> = (props) => {
    const itemRef = useRef(null);
    const {
        disabledToDrop = [],
        id, label, isSelected, isEditing, isDisabled, canDropList,
        icon, useCustomIconToExpand, iconSize, type, isDisabledDrop,
        isAllowedToggleNodeExpand = true, paddingLeft, isDisabledDrag,
        showExpandIcon, nodeExpanded, description, hasError, hasWarning,
    } = props;

    const { expandItemById, changeAscById } = useItems();
    const { isUseDrag, isUseDrop, customDragLayer } = useConfigs();

    const handleExpandNode = useCallback((e: React.MouseEvent<HTMLImageElement | HTMLInputElement, MouseEvent>) => {
        if (!isAllowedToggleNodeExpand) return;

        e.stopPropagation();
        e.preventDefault();

        expandItemById(id);

    }, [expandItemById, id, isAllowedToggleNodeExpand]);


    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 39 && !nodeExpanded) {
            handleExpandNode(e as any);
        } else if (e.keyCode === 37 && nodeExpanded) {
            handleExpandNode(e as any);
        }
    }, [handleExpandNode, nodeExpanded]);

    const handleOnDrop = useCallback((droppedId: string | undefined) => {
        changeAscById(droppedId, id)
    }, [changeAscById, id]);

    /** Permite que um elemento seja arrastado e dropado em outro lugar.. */
    const [{ isDragging }, dragRef, preview] = useDrag<IDroppableItem, any, any>({
        item: {
            type,
            itemProps: {
                itemType: type,
                height: 0,
                width: 0,
                id: id,
                label,
                icon,
            }
        },
        canDrag: isUseDrag && !isDisabledDrag,
        collect: monitor => ({ isDragging: monitor.isDragging() }),
    });
    dragRef(itemRef); /** Agrupa as referências do drop com as da ref. */

    /** Faz com que o item que está sendo arrastado tenha um preview custumizado */
    useEffect(() => {
        if (customDragLayer) {
            preview(getEmptyImage(), { captureDraggingState: true });
        }
    }, [customDragLayer, preview]);

    /** Usado para que seja possível o drop de itens no editor. */
    const [{ isDraggingOver }, dropRef] = useDrop<IDroppableItem, any, any>({
        accept: canDropList || [],
        drop: item => handleOnDrop(item.itemProps.id),
        collect: (monitor) => ({ isDraggingOver: monitor.isOver() }),
        canDrop: ({ itemProps }) => !!isUseDrop && !isDisabledDrop && !disabledToDrop.some(item => item === itemProps.id),
    });
    dropRef(itemRef); /** Agrupa as referências do drop com as da ref. */

    return (
        <div
            title={description}
            className={`tree-item${isDisabled ? ' disabled' : ''}${isSelected ? ' selected' : ''}${isEditing ? ' editing' : ''}${isDragging ? ' dragging' : ''}${(isDraggingOver && isUseDrop && !isDisabledDrop) ? ' dragging-over' : ''}`}
        >
            <input
                id={id}
                type="radio"
                name="tree-item-name"
                disabled={isDisabled}
                onKeyDown={handleKeyDown}
            />
            <label
                htmlFor={id}
                ref={itemRef}
                style={{ paddingLeft: (showExpandIcon ? 8 : 28) + paddingLeft }}
                className={`${hasError ? ' error' : ''}${hasWarning ? ' warning' : ''}`}
            >
                <Icon
                    iconSize={16}
                    show={showExpandIcon}
                    onClick={handleExpandNode}
                    icon={nodeExpanded ? IconCollapsedFolder : IconExpandedFolder}
                    iconName={nodeExpanded ? "btn-collapse-folder" : "btn-expand-folder"}
                />
                <Icon
                    icon={icon}
                    iconName={label}
                    iconSize={iconSize || 16}
                    show={icon !== undefined}
                    onClick={useCustomIconToExpand ? handleExpandNode : undefined}
                />
                {label}
            </label>
            {(isDragging && customDragLayer) &&
                // Usada para mostrar o preview com titulo do item que está sendo arrastado
                customDragLayer(<>
                    <Icon
                        icon={icon}
                        iconName={label}
                        iconSize={iconSize}
                        show={icon !== undefined}
                    />
                    {label}
                </>)
            }
        </div>
    );
}
