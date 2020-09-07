import React, { createContext, useState, useEffect } from 'react';

import { ITreeManagerConfigs } from '../interfaces';

interface IConfigurationContextData {
    configs: ITreeManagerConfigs
}
export const ConfigurationContext = createContext<IConfigurationContextData>({} as IConfigurationContextData);

export const ConfigurationProvider: React.FC<{ configs: ITreeManagerConfigs }> = ({ children, configs }) => {

    /** Default values from configs */

    // GENERAL

    const [state, setState] = useState<IConfigurationContextData>({ configs });
    useEffect(() => {
        setState({ configs });
    }, [configs]);

    return (
        <ConfigurationContext.Provider value={state} >
            {children}
        </ConfigurationContext.Provider>
    );
};
