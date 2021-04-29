import React, { useCallback, useRef, useEffect } from 'react';
import { IObservable, useObserver, useObserverValue } from 'react-observing';
import { VscChevronRight, VscChevronDown } from 'react-icons/vsc';
import { useDrag, useDrop } from 'react-dnd';

import { ITreeItem, IDroppableItem } from '../../shared/interfaces';
import { useItems, useConfigs } from '../../shared/hooks';
import { getCustomDragLayer } from '../../shared/tools';
import { Icon } from '../icon/icon';

interface TreeItemProps extends ITreeItem {
    paddingLeft: number;
    disabledToDrop?: string[];
    showExpandIcon: IObservable<boolean>;
    onContextMenu?(itemTreeId: string | undefined, e: React.MouseEvent<HTMLDivElement, MouseEvent>): void | undefined;
}
export const TreeItem: React.FC<TreeItemProps> = ({ disabledToDrop = [], onContextMenu, paddingLeft, ...props }) => {
    const { isUseDrag, isUseDrop, id: treeIdentifier, activeItemBackgroundColor } = useConfigs();
    const { editItem, selectItem, changeAscById } = useItems();

    const radioItemRef = useRef<HTMLInputElement>(null);
    const itemRef = useRef<HTMLLabelElement>(null);

    const [isAllowedToggleNodeExpand = true] = useObserver(props.isAllowedToggleNodeExpand);
    const useCustomIconToExpand = useObserverValue(props.useCustomIconToExpand);
    const isDisabledDoubleClick = useObserverValue(props.isDisabledDoubleClick);
    const [nodeExpanded, setNodeExpanded] = useObserver(props.nodeExpanded);
    const isDisabledSelect = useObserverValue(props.isDisabledSelect);
    const isDisabledClick = useObserverValue(props.isDisabledClick);
    const isDisabledDrag = useObserverValue(props.isDisabledDrag);
    const isDisabledDrop = useObserverValue(props.isDisabledDrop);
    const showExpandIcon = useObserverValue(props.showExpandIcon);
    const description = useObserverValue(props.description);
    const canDropList = useObserverValue(props.canDropList);
    const isDisabled = useObserverValue(props.isDisabled);
    const hasWarning = useObserverValue(props.hasWarning);
    const isSelected = useObserverValue(props.isSelected);
    const isEditing = useObserverValue(props.isEditing);
    const hasError = useObserverValue(props.hasError);
    const iconSize = useObserverValue(props.iconSize);
    const label = useObserverValue(props.label);
    const type = useObserverValue(props.type);
    const icon = useObserverValue(props.icon);
    const id = useObserverValue(props.id);

    // Scroll elements
    useEffect(() => {
        if (isSelected && itemRef.current) {
            itemRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isSelected]);

    const handleExpandNode = useCallback((e: React.MouseEvent<any, MouseEvent>) => {
        if (!isAllowedToggleNodeExpand) return;

        e.stopPropagation();
        e.preventDefault();

        setNodeExpanded(oldValue => !oldValue);
    }, [isAllowedToggleNodeExpand, setNodeExpanded]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 39 && !nodeExpanded) {
            handleExpandNode(e as any);
        } else if (e.keyCode === 37 && nodeExpanded) {
            handleExpandNode(e as any);
        } else if (e.keyCode === 13) {
            editItem(props.isEditing);
        }
    }, [editItem, handleExpandNode, props.isEditing, nodeExpanded]);

    const handleOnDrop = useCallback((droppedId: string | undefined) => {
        changeAscById(droppedId, id)
    }, [changeAscById, id]);

    /** Emits an event to identify which element was clicked. */
    const handleOnContext = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        onContextMenu && onContextMenu(id, e);
    }, [id, onContextMenu]);

    // Emits an event to identify which element was clicked.
    const handleOnClick = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (isDisabled || isDisabledClick) return;

        e.stopPropagation();

        selectItem(props.isSelected, e.ctrlKey);
    }, [props.isSelected, isDisabled, isDisabledClick, selectItem]);

    // Emits an event to identify which element was focused.
    const handleOnItemsFocus = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
        if (isDisabled || isDisabledClick || isSelected) return;

        e.stopPropagation();

        selectItem(props.isSelected, false);
    }, [isDisabled, isDisabledClick, isSelected, selectItem, props.isSelected]);

    // Emits an event to identify which element was clicked.
    const handleOnDoubleClick = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (isDisabled || isDisabledDoubleClick) return;

        e.stopPropagation();
        e.preventDefault();

        editItem(props.isEditing);
    }, [isDisabled, isDisabledDoubleClick, props.isEditing, editItem]);

    /** Permite que um elemento seja arrastado e dropado em outro lugar.. */
    const [{ isDragging }, dragRef, preview] = useDrag<IDroppableItem, any, { isDragging: boolean }>({
        type,
        canDrag: isUseDrag && !isDisabledDrag,
        collect: monitor => ({ isDragging: monitor.isDragging() }),
        item: {
            type,
            itemProps: {
                itemType: type,
                height: 0,
                width: 0,
                label,
                icon,
                id,
            }
        },
    });
    dragRef(itemRef); /** Agrupa as referências do drop com as da ref. */

    /** Faz com que o item que está sendo arrastado tenha um preview custumizado */
    useEffect(() => {
        const customDragLayer = getCustomDragLayer(label, {
            icon: typeof icon === 'string' ? icon : String(icon?.content),
            color: activeItemBackgroundColor,
        });

        preview(customDragLayer, { captureDraggingState: false, offsetX: -16, offsetY: customDragLayer.offsetHeight / 2 })

        return () => customDragLayer.remove();
    }, [preview, label, icon, activeItemBackgroundColor]);

    /** Usado para que seja possível o drop de itens no editor. */
    const [{ isDraggingOver }, dropRef] = useDrop<IDroppableItem, any, { isDraggingOver: boolean }>({
        accept: canDropList || [],
        drop: item => handleOnDrop(item.itemProps.id),
        collect: (monitor) => ({ isDraggingOver: monitor.isOver() }),
        canDrop: ({ itemProps }) => !!isUseDrop && !isDisabledDrop && !disabledToDrop.some(item => item === itemProps.id),
    });
    dropRef(itemRef); /** Agrupa as referências do drop com as da ref. */

    return (
        <div
            title={description}
            onMouseDown={handleOnClick}
            onContextMenu={handleOnContext}
            onDoubleClick={handleOnDoubleClick}
            className={`tree-item${isDisabled ? ' disabled' : ''}${isEditing ? ' editing' : ''}${isSelected ? ' selected' : ''}${isDragging ? ' dragging' : ''}${(isDraggingOver && isUseDrop && !isDisabledDrop) ? ' dragging-over' : ''}`}
        >
            <input
                id={id}
                type="radio"
                ref={radioItemRef}
                onKeyDown={handleKeyDown}
                onFocus={handleOnItemsFocus}
                disabled={isDisabled || isDisabledSelect}
                name={"tree-item-name-" + treeIdentifier}
            />
            <label
                htmlFor={id}
                ref={itemRef}
                style={{ paddingLeft: (showExpandIcon ? 8 : 28) + paddingLeft }}
                className={`${hasError ? ' error' : ''}${hasWarning ? ' warning' : ''}`}
            >
                {showExpandIcon && (nodeExpanded
                    ? (
                        <VscChevronDown
                            size={16}
                            style={{ marginRight: 8 }}
                            onClick={handleExpandNode}
                        />
                    )
                    : (
                        <VscChevronRight
                            size={16}
                            style={{ marginRight: 8 }}
                            onClick={handleExpandNode}
                        />
                    )
                )}
                <Icon
                    iconName={label}
                    iconSize={iconSize || 16}
                    show={icon !== undefined}
                    icon={typeof icon === 'string' ? icon : String(icon?.content)}
                    onClick={useCustomIconToExpand ? handleExpandNode : undefined}
                />
                {label}
            </label>
        </div>
    );
}
