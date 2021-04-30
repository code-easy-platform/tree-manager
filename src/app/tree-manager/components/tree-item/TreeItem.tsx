import React, { useCallback, useRef, useEffect } from 'react';
import { IObservable, set, useObserver, useObserverValue } from 'react-observing';
import { VscChevronRight, VscChevronDown } from 'react-icons/vsc';
import { useDrag, useDrop } from 'react-dnd';

import { ITreeItem, IDroppableItem } from '../../shared/interfaces';
import { useItems, useConfigs } from '../../shared/hooks';
import { getCustomDragLayer } from '../../shared/tools';
import { Icon } from '../icon/icon';
import './TreeItem.css';
import { ExpandCollapse } from '../expand-collapse/ExpandCollapse';


interface TreeItemProps {
    item: ITreeItem;
    paddingLeft: number;
    showExpandIcon: boolean;
    onContextMenu?(itemTreeId: string | undefined, e: React.MouseEvent<any, MouseEvent>): void | undefined;
}
export const TreeItem: React.FC<TreeItemProps> = ({ item, paddingLeft, children, showExpandIcon, onContextMenu }) => {
    const { isUseDrag, isUseDrop, id: treeIdentifier } = useConfigs();
    const { editItem, selectItem, changeAscById } = useItems();

    const treeItemHtmlRef = useRef<HTMLDivElement>(null);

    const [useCustomIconToExpand] = useObserver(item.useCustomIconToExpand);
    const [nodeExpanded, setNodeExpanded] = useObserver(item.nodeExpanded);
    const [isDisabledSelect] = useObserver(item.isDisabledSelect);
    const [isDisabledClick] = useObserver(item.isDisabledClick);
    const [description] = useObserver(item.description);
    const [hasWarning] = useObserver(item.hasWarning);
    const [isSelected] = useObserver(item.isSelected);
    const [isDisabled] = useObserver(item.isDisabled);
    const [isEditing] = useObserver(item.isEditing);
    const [iconSize] = useObserver(item.iconSize);
    const [hasError] = useObserver(item.hasError);
    const [label] = useObserver(item.label);
    const [icon] = useObserver(item.icon);

    /* Focus in this label element */
    useEffect(() => {
        if (isSelected) {
            const treeItemLabel = treeItemHtmlRef.current?.querySelector(`#${treeIdentifier} [tree-item] > .tree-item-label`);
            if (!treeItemLabel) return;

            (treeItemLabel as any)?.focus();
        }
    }, [isSelected, treeIdentifier]);


    /** Emits an event to identify which element was clicked. */
    const handleContext = useCallback((e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
        e.stopPropagation();
        onContextMenu && onContextMenu(treeIdentifier, e);
    }, [treeIdentifier, onContextMenu]);

    /** Emits an event to identify which element was clicked. */
    const handleSelect = useCallback((e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
        if (isDisabled || isDisabledClick || isDisabledSelect) return;

        e.stopPropagation();

        selectItem(item.isSelected, e.ctrlKey)
    }, [isDisabled, isDisabledClick, isDisabledSelect, item.isSelected, selectItem]);

    const handleKeyDown: React.KeyboardEventHandler<HTMLLabelElement> = useCallback(e => {
        e.stopPropagation();
        e.preventDefault();

        const allTreeItems = Array.from(document.querySelectorAll(`#${treeIdentifier} [tree-item] > .tree-item-label[tabIndex="0"]`));
        if (allTreeItems.length === 0) return;

        const treeItemLabel = treeItemHtmlRef.current?.querySelector(`#${treeIdentifier} [tree-item] > .tree-item-label`);
        if (!treeItemLabel) return;

        const index = allTreeItems.indexOf(treeItemLabel);
        if (index < 0) return;

        switch (e.key) {
            case 'ArrowUp':
                if (index > 0) {
                    (allTreeItems[index - 1] as any)?.click();
                }
                break;
            case 'ArrowDown':
                if (allTreeItems.length > (index + 1)) {
                    (allTreeItems[index + 1] as any)?.click()
                }
                break;
            case 'ArrowLeft':
                if (nodeExpanded) {
                    setNodeExpanded(false);
                } else {
                    if (index > 0) {
                        (allTreeItems[index - 1] as any)?.click();
                    }
                }
                break;
            case 'ArrowRight':
                if (!nodeExpanded) {
                    setNodeExpanded(true);
                } else {
                    if (allTreeItems.length > (index + 1)) {
                        (allTreeItems[index + 1] as any)?.click();
                    }
                }
                break;
            case 'Enter':
                editItem(item.isEditing);
                break;
            case 'Escape':
                const treeBase = document.querySelector(`#${treeIdentifier}`);
                if (!treeBase) return;

                (treeBase as any).focus();
                break;
            default: break;
        }
    }, [treeIdentifier, nodeExpanded, editItem, item.isEditing, setNodeExpanded]);


    return (
        <div tree-item={""} ref={treeItemHtmlRef} title={description}>
            <label
                onClick={handleSelect}
                style={{ paddingLeft }}
                onKeyDown={handleKeyDown}
                className="tree-item-label"
                onContextMenu={handleContext}
                onDoubleClick={() => editItem(item.isEditing)}
                tabIndex={(isDisabledSelect || isDisabled) ? -1 : 0}

                tree-item-editing={String(isEditing)}
                tree-item-has-error={String(hasError)}
                tree-item-disabled={String(isDisabled)}
                tree-item-selected={String(isSelected)}
                tree-item-has-warning={String(hasWarning)}
            >

                <ExpandCollapse
                    onClick={() => setNodeExpanded(!nodeExpanded)}
                    isExpanded={nodeExpanded}
                    display={showExpandIcon}
                />

                <Icon
                    iconName={label}
                    iconSize={iconSize || 16}
                    show={icon !== undefined}
                    icon={typeof icon === 'string' ? icon : String(icon?.content)}
                    onClick={useCustomIconToExpand ? () => setNodeExpanded(!nodeExpanded) : undefined}
                />

                <p className="tree-item-label-content-text">
                    {label}
                </p>
            </label>

            {children && (
                <div className="tree-item-childs">
                    {children}
                </div>
            )}
        </div>
    );
}









interface _TreeItemProps extends ITreeItem {
    paddingLeft: number;
    disabledToDrop?: string[];
    showExpandIcon: IObservable<boolean>;
    onContextMenu?(itemTreeId: string | undefined, e: React.MouseEvent<HTMLDivElement, MouseEvent>): void | undefined;
}
export const _TreeItem: React.FC<_TreeItemProps> = ({ disabledToDrop = [], onContextMenu, paddingLeft, children, ...props }) => {
    const { isUseDrag, isUseDrop, id: treeIdentifier, activeItemBackgroundColor } = useConfigs();
    const { editItem, selectItem, changeAscById } = useItems();

    const radioItemRef = useRef<HTMLInputElement>(null);
    const itemRef = useRef<HTMLLabelElement>(null);

    //#region States

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

    //#endregion

    // Scroll elements
    useEffect(() => {
        if (isSelected && itemRef.current) {
            (itemRef.current as any)?.scrollIntoViewIfNeeded({ behavior: 'smooth' });
        }
    }, [isSelected]);

    //#region Methdos

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

    //#endregion

    //#region Drag and drop

    /** Usado para que seja possível o drop de itens no editor. */
    const [{ isDraggingOver }, dropRef] = useDrop<IDroppableItem, any, { isDraggingOver: boolean }>({
        accept: canDropList || [],
        drop: item => handleOnDrop(item.itemProps.id),
        collect: (monitor) => ({ isDraggingOver: monitor.isOver() }),
        canDrop: ({ itemProps }) => !!isUseDrop && !isDisabledDrop && !disabledToDrop.some(item => item === itemProps.id),
    });

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

    /** Faz com que o item que está sendo arrastado tenha um preview custumizado */
    useEffect(() => {
        const customDragLayer = getCustomDragLayer(label, {
            icon: typeof icon === 'string' ? icon : String(icon?.content),
            color: activeItemBackgroundColor,
        });

        preview(customDragLayer, { captureDraggingState: false, offsetX: -16, offsetY: customDragLayer.offsetHeight / 2 })

        return () => customDragLayer.remove();
    }, [preview, label, icon, activeItemBackgroundColor]);

    dropRef(dragRef(itemRef)); /** Agrupa as referências do drop e drag com as da ref. */

    //#endregion

    return (
        <div style={{ width: '100%', flexDirection: 'column', backgroundColor: (isDraggingOver && !isDragging) ? '#ffffff07' : undefined, opacity: isDragging ? 0.5 : undefined }}>
            <div
                title={description}
                onMouseDown={handleOnClick}
                onContextMenu={handleOnContext}
                onDoubleClick={handleOnDoubleClick}
                className={`tree-item${isDisabled ? ' disabled' : ''}${isEditing ? ' editing' : ''}${isSelected ? ' selected' : ''}${isDragging ? ' dragging' : ''}${(isDraggingOver && isUseDrop && !isDisabledDrop && !isDragging) ? ' dragging-over' : ''}`}
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
            {children}
        </div>
    );
}
