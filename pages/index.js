import React from "react"
import config from "../config.json"
import Menu from "../src/components/Menu/index.js"
import { Header } from "../src/components/Header"
import { Timeline } from "../src/components/Timeline"
import { Favorites } from "../src/components/Favorites"
import VideoPlayer from "../src/components/VideoPlayer"

function HomePage() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    const [videoVisible, setVideoVisible] = React.useState({state: false, url: ""})

    return (
        <>          
            <div id="body" style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header/>
                <Timeline 
                    searchValue={valorDoFiltro} 
                    videoVisible={videoVisible} 
                    setVideoVisible={setVideoVisible}  
                    playlists={config.playlists}>
                    conteudo
                </Timeline>
                <Favorites favorites={config.favorites}/>
                {videoVisible.state && (
                    <VideoPlayer videoVisible={videoVisible} setVideoVisible={setVideoVisible}/>
                )}
                
            </div>
                
        </>
    )  
}
  
export default HomePage