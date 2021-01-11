import { IconAction, IconFolder } from 'code-easy-components';
import { observe } from "react-observing";

import { ITreeItem } from "./tree-manager/shared/interfaces";

type TOptional<T> = { [k in keyof T]?: T[k] };

const newTreeItem = (value: TOptional<ITreeItem>): ITreeItem => {
    return {
        id: value.id || observe(undefined),
        type: value.type || observe('ITEM'),
        icon: value.icon || observe(undefined),
        label: value.label || observe('undefined'),
        isSelected: value.isSelected || observe(false),
        hasError: value.hasError || observe(undefined),
        iconSize: value.iconSize || observe(undefined),
        isEditing: value.isEditing || observe(undefined),
        nodeExpanded: value.nodeExpanded || observe(false),
        isDisabled: value.isDisabled || observe(undefined),
        hasWarning: value.hasWarning || observe(undefined),
        canDropList: value.canDropList || observe(['ITEM']),
        ascendantId: value.ascendantId || observe(undefined),
        description: value.description || observe(undefined),
        isDisabledDrag: value.isDisabledDrag || observe(false),
        isDisabledDrop: value.isDisabledDrop || observe(false),
        showExpandIcon: value.showExpandIcon || observe(undefined),
        isDisabledClick: value.isDisabledClick || observe(undefined),
        isDisabledSelect: value.isDisabledSelect || observe(undefined),
        isDisabledDoubleClick: value.isDisabledDoubleClick || observe(undefined),
        useCustomIconToExpand: value.useCustomIconToExpand || observe(undefined),
        isAllowedToggleNodeExpand: value.isAllowedToggleNodeExpand || observe(undefined),
    };
}

export const Items: ITreeItem[] = [
    newTreeItem({ id: observe("0"), label: observe("Item 01"), isSelected: observe(false), canDropList: observe(['ITEM']), type: observe('ITEM'), nodeExpanded: observe(false), ascendantId: observe(undefined), icon: observe({ content: IconFolder }), isDisabledClick: observe(true), isDisabledSelect: observe(true), isDisabledDoubleClick: observe(true), }),
    newTreeItem({ id: observe("1"), label: observe("Item 02"), isSelected: observe(true), canDropList: observe(['ITEM']), type: observe('ITEM'), nodeExpanded: observe(false), ascendantId: observe('0'), icon: observe(undefined), hasWarning: observe(true) }),
    newTreeItem({ id: observe("2"), label: observe("Item 03"), isSelected: observe(false), canDropList: observe(['ITEM']), type: observe('ITEM'), nodeExpanded: observe(false), ascendantId: observe('1'), icon: observe({ content: IconAction }) }),
    newTreeItem({ id: observe("3"), label: observe("Item 04"), isSelected: observe(false), canDropList: observe(['ITEM']), type: observe('ITEM'), nodeExpanded: observe(false), ascendantId: observe('2'), icon: observe({ content: IconAction }) }),
    newTreeItem({ id: observe("4"), label: observe("Item 05"), isSelected: observe(false), canDropList: observe(['ITEM']), type: observe('ITEM'), nodeExpanded: observe(false), ascendantId: observe('3'), icon: observe({ content: IconAction }) }),
    newTreeItem({ id: observe("5"), label: observe("Item 06"), isSelected: observe(false), canDropList: observe(['ITEM']), type: observe('ITEM'), nodeExpanded: observe(false), ascendantId: observe('4'), icon: observe({ content: IconAction }) }),
    newTreeItem({ id: observe("6"), label: observe("Item 07"), isSelected: observe(false), canDropList: observe(['ITEM']), type: observe('ITEM'), nodeExpanded: observe(false), ascendantId: observe('5'), icon: observe({ content: IconAction }) }),
    newTreeItem({ id: observe("7"), label: observe("Item 08"), isSelected: observe(false), canDropList: observe(['ITEM']), type: observe('ITEM'), nodeExpanded: observe(false), ascendantId: observe('6'), icon: observe({ content: IconAction }) }),
    newTreeItem({ id: observe("8"), label: observe("Item 09"), isSelected: observe(false), canDropList: observe(['ITEM']), type: observe('ITEM'), nodeExpanded: observe(false), ascendantId: observe('7'), icon: observe({ content: IconAction }) }),
    newTreeItem({ id: observe("9"), label: observe("Item 10"), isSelected: observe(false), canDropList: observe(['ITEM']), type: observe('ITEM'), nodeExpanded: observe(false), ascendantId: observe('8'), icon: observe({ content: IconAction }) }),
    newTreeItem({ id: observe("10"), label: observe("Item 11"), isSelected: observe(false), canDropList: observe(['ITEM']), type: observe('ITEM'), nodeExpanded: observe(false), ascendantId: observe('9'), icon: observe({ content: IconAction }) }),
    newTreeItem({ id: observe("11"), label: observe("Item 12"), isSelected: observe(false), canDropList: observe(['ITEM']), type: observe('ITEM'), nodeExpanded: observe(false), ascendantId: observe('10'), icon: observe({ content: IconAction }) }),
    newTreeItem({ id: observe("12"), label: observe("Item 13"), isSelected: observe(false), canDropList: observe(['ITEM']), type: observe('ITEM'), nodeExpanded: observe(false), ascendantId: observe('11'), icon: observe({ content: IconAction }) }),
    newTreeItem({ id: observe("13"), label: observe("Item 14"), isSelected: observe(false), canDropList: observe(['ITEM']), type: observe('ITEM'), nodeExpanded: observe(false), ascendantId: observe('12'), icon: observe({ content: IconAction }) }),
    newTreeItem({ id: observe("14"), label: observe("Item 15"), isSelected: observe(false), canDropList: observe(['ITEM']), type: observe('ITEM'), nodeExpanded: observe(false), ascendantId: observe('13'), icon: observe({ content: IconAction }) }),
    newTreeItem({ id: observe("15"), label: observe("Item 16"), isSelected: observe(false), canDropList: observe(['ITEM']), type: observe('ITEM'), nodeExpanded: observe(false), ascendantId: observe('14'), icon: observe({ content: IconAction }) }),
    newTreeItem({ id: observe("16"), label: observe("Item 17"), isSelected: observe(false), canDropList: observe(['ITEM']), type: observe('ITEM'), nodeExpanded: observe(false), ascendantId: observe('15'), icon: observe({ content: IconAction }) }),
    newTreeItem({ id: observe("17"), label: observe("Item 18"), isSelected: observe(false), canDropList: observe(['ITEM']), type: observe('ITEM'), nodeExpanded: observe(false), ascendantId: observe('16'), icon: observe({ content: IconAction }) }),
    newTreeItem({ id: observe("18"), label: observe("Item 19"), isSelected: observe(false), canDropList: observe(['ITEM']), type: observe('ITEM'), nodeExpanded: observe(false), ascendantId: observe('17'), icon: observe({ content: IconAction }) }),
    newTreeItem({ id: observe("19"), label: observe("Item 20"), isSelected: observe(false), canDropList: observe(['ITEM']), type: observe('ITEM'), nodeExpanded: observe(false), ascendantId: observe('18'), icon: observe({ content: IconAction }) }),
    newTreeItem({ id: observe("20"), label: observe("Item 21"), isSelected: observe(false), canDropList: observe(['ITEM']), type: observe('ITEM'), nodeExpanded: observe(false), ascendantId: observe('19'), icon: observe({ content: IconAction }), hasWarning: observe(true) }),
    newTreeItem({ id: observe("21"), label: observe("Item 22"), isSelected: observe(false), canDropList: observe(['ITEM']), type: observe('ITEM'), nodeExpanded: observe(false), ascendantId: observe('20'), icon: observe({ content: IconAction }), isDisabledDrag: observe(false), isDisabled: observe(true) }),
    newTreeItem({ id: observe("22"), label: observe("Item 23"), isSelected: observe(false), canDropList: observe(['ITEM']), type: observe('ITEM'), nodeExpanded: observe(false), ascendantId: observe('21'), icon: observe({ content: IconAction }), isDisabledDrag: observe(true), isDisabledDrop: observe(true), isDisabled: observe(false), hasError: observe(true) }),
    newTreeItem({ id: observe("23"), label: observe("Item 24"), isSelected: observe(false), canDropList: observe(['ITEM']), type: observe('ITEM'), nodeExpanded: observe(false), ascendantId: observe('22'), icon: observe({ content: IconAction }), isDisabledSelect: observe(true) }),
    newTreeItem({ id: observe("30"), label: observe("Item 30"), isSelected: observe(false), canDropList: observe(['ITEM']), type: observe('ITEM'), nodeExpanded: observe(false), ascendantId: observe(undefined), icon: observe({ content: IconAction }), description: observe('Minha descrição de teste'), isDisabledDrag: observe(false), isDisabled: observe(true), hasWarning: observe(true) }),
    newTreeItem({ id: observe("31"), label: observe("Item 31"), isSelected: observe(false), canDropList: observe(['ITEM']), type: observe('ITEM'), nodeExpanded: observe(false), ascendantId: observe('30'), icon: observe({ content: IconAction }), isDisabledDrag: observe(true), isDisabledDrop: observe(true), isDisabled: observe(false), hasError: observe(true) }),
];
