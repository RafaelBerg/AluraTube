import React, { useState } from "react";

export const ColorModeContext = React.createContext({
    mode: "",
    setMode: () => {},
    toggleMode: () => {}
});


export default function ColorModeProvider(props){
    const [mode, setMode] = useState(props.initalMode)

    function toggleMode(){
        mode === "light" ? setMode("dark") : setMode("light")
    }

    return (
        <ColorModeContext.Provider value={{
            mode: mode, 
            setMode: setMode, 
            toggleMode: toggleMode}}>
            {props.children}
        </ColorModeContext.Provider>
    )
}