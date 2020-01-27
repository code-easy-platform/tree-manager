import { TreeItensTypes } from './TreeItensTypes';

export interface TreeInterface {
    itemId: number;
    itemLabel: string;
    isSelected: boolean;
    nodeExpanded: boolean;
    itemType: TreeItensTypes;
    itemChilds: TreeInterface[];
}
