import { useContext, useCallback } from "react"
import { ItemsContext } from "../contexts";


export const useItems = () => {
    const items = useContext(ItemsContext);

    const itemsBase = items.filter(item => !item.ascendantId);

    const itemsByAscendentId = useCallback((id: string) => {
        return items.filter(item => item.ascendantId === id)
    }, [items]);

    return {
        itemsByAscId: itemsByAscendentId,
        baseItems: itemsBase,
    }
} 
