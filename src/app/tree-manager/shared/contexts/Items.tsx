import React, { createContext, useState, useEffect, useCallback } from 'react';

import { ITreeItem } from '../interfaces';

interface IContextData {
    setItems(items: ITreeItem[]): void;
    items: ITreeItem[];
}
export const ItemsContext = createContext<IContextData>({} as IContextData);

export const ItemsProvider: React.FC<{ items: ITreeItem[] }> = ({ children, items }) => {

    const setItems = useCallback((items: ITreeItem[]) => {
        setState(items);
    }, []);

    const [state, setState] = useState<ITreeItem[]>(items);
    useEffect(() => {
        setState(items);
    }, [items]);

    return (
        <ItemsContext.Provider value={{ items: state, setItems }}>
            {children}
        </ItemsContext.Provider>
    );
};
