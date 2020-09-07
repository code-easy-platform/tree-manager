export interface ITreeManagerConfigs {
    /**
     * Background color of the item that has the property isEditing = true
     */
    editingItemBackgroundColor?: string,
    /**
     * Background color of the item that has the property isSelected = true
     */
    activeItemBackgroundColor?: string,
    /**
     * Text color of the item that has the property hasError = true
     */
    hasErrorItemTextColor?: string,
    /**
     * Text color of the item that has the property hasWarning = true
     */
    hasWarningItemTextColor?: string,
    /**
     * Enabled to drop items on this item
     */
    isUseDrop?: boolean;
    /**
     * Enabled to drag this item
     */
    isUseDrag?: boolean;
    /**
     * Show empty message
     */
    showEmptyMessage?: boolean;

}
