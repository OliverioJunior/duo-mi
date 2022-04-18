import React,{createContext, useState} from 'react';

export const ScrollMenu = createContext();

export default function ScrollMenuProvider({children}){
    const [offTop, setOffTop] = useState();
    const [offLeft, setOffLeft] = useState();
    const [loadTop, setLoadTop] = useState();
    const [loadLeft, setLoadLeft] = useState();
    const [drawing, setDrawing] = useState(false);
    return (
        <ScrollMenu.Provider value={{
            offTop,
            setOffTop,
            offLeft,
            setOffLeft,
            loadTop,
            setLoadTop,
            loadLeft,
            setLoadLeft,
            drawing,
            setDrawing
            
        }}>
            {children}
        </ScrollMenu.Provider> 
    )
}
