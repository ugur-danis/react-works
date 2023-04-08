import { useState, createContext } from "react";

const defaultValue = {
    paras: 4,
    includeHTML: false
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [paras, setParas] = useState(defaultValue.paras);
    const [includeHTML, setIncludeHTML] = useState(defaultValue.includeHTML);

    const value = {
        paras,
        setParas,
        includeHTML,
        setIncludeHTML
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};