import React from "react";
import Menu from "../src/components/Menu";

export default function Video(){
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    // trocar
    const url = "https://www.youtube.com/watch?v=imB0QVoNrGc"

    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
        }}>
            <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
            <div style={{
                display: "flex",
                placeItems: "center",
                flex: 1,
                margin: "0px auto"
                }}>
                    <div> 
                        <h2>Titulo</h2>
                        <iframe id="ytplayer" type="text/html" width="640" height="360" src={url.replace("/watch?v=","/embed/")}/>                     
                    </div>
            </div>      
        </div>                                                          
    )
}