import React from "react"
import config from "../config.json"
import Menu from "../src/components/Menu/index.js"
import { Header } from "../src/components/Header"
import { Timeline } from "../src/components/Timeline"
import { Favorites } from "../src/components/Favorites"

function HomePage() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    return (
        <>          
            <div id="body" style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header/>
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>
                    conteudo
                </Timeline>
                <Favorites favorites={config.favorites}/>
            </div>
                
        </>
    )  
}
  
export default HomePage