/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useContext, useState } from 'react';




const NvBarContext = createContext();

const useNvBarContexts = () => {
    return useContext(NvBarContext);
}

export const NvBarContextProvider = ({ children }) => {





    const [NvBar, setNvBar] = useState(false)

    return <NvBarContext.Provider value={{ NvBar, setNvBar }}>
        {children}
    </NvBarContext.Provider>

}

export default useNvBarContexts;
