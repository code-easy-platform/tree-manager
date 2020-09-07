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
    hasErrorItemBackgroundColor?: string,
    /**
     * Text color of the item that has the property hasWarning = true
     */
    hasWarningItemBackgroundColor?: string,
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
