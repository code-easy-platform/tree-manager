import React, { createContext, useState, useEffect } from 'react';

import { ITreeItem } from '../interfaces';

export const ItemsContext = createContext<ITreeItem[]>({} as ITreeItem[]);

export const ItemsProvider: React.FC<{ items: ITreeItem[] }> = ({ children, items }) => {

    const [state, setState] = useState<ITreeItem[]>(items);
    useEffect(() => {
        setState(items);
    }, [items]);

    return (
        <ItemsContext.Provider value={state} >
            {children}
        </ItemsContext.Provider>
    );
};
