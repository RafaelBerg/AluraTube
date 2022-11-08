import React from "react"
import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset"
import Menu from "../src/components/Menu/index.js"
import { StyledTimeline } from "../src/components/TimeLine"

function HomePage() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                /* backgroundColor:  */
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

const StyledHeader = styled.div`
    .icon {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;


function Header(){
    return(
        <StyledHeader>
            {<div style={{
                width: "100%",
                height: "260px",
                backgroundImage: `url(${config.bg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }} />}

            <section className="user-info">
                <a href="https://www.linkedin.com/in/rafael-berg/" ><img className="icon" src={`https://github.com/${config.github}.png`} /></a>
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.description}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline({searchValue, ...props}){
    const playlistNames = Object.keys(props.playlists)
    
    return(
        <StyledTimeline>
            {playlistNames.map((playListName) => {
                const videos = props.playlists[playListName]
                
                return (
                    <section key={playListName}>
                        <h2>{playListName}</h2>
                        <div>
                            {videos.filter((video) => {
                                const titleNormalized = video.title.toLowerCase()
                                const searchValueNormalized = searchValue.toLowerCase()
                                return titleNormalized.includes(searchValueNormalized)
                            }).map((video) => {
                                return (
                                    <a key={video.url} href={video.url} >
                                        <img src={video.thumb} 
                                            onMouseLeave={(props) => {
                                            props.target.src = video.thumb
                                        }}  onMouseEnter={(props) => {
                                            props.target.src = video.animate
                                    }}/>
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })
                            }
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}

const StyledFavorites = styled.div`
    padding: 16px;
    .conteudo{
        display:flex;
        padding: 10px;
        gap: 14px;
    }
    .icon {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        cursor: pointer;
    }
    h2{
        font-size: 16px;
        margin-bottom: 16px;
        text-transform: capitalize;
        margin: 0px 0px 10px 15px;
        color: ${({ theme }) => theme.textColorBase || "#222222"};
    }
    a{
        font-size: 12px; 
        color: ${({ theme }) => theme.textColorBase || "#222222"};
    }
    section{
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        width : 100px;

    }
`;

function Favorites(props){
    const favorites = Object.keys(props.favorites)

    return (
        <StyledFavorites>
            <h2>AluraTubes Favoritos</h2>
                <div className="conteudo">  
                {favorites.map((favorite) => {
                    const youtuber = props.favorites[favorite]
                    return (
                        <section key={favorite}>
                            <a href={youtuber.url}><img className="icon" src={youtuber.icon} /></a> 
                            <a href={youtuber.url}> {youtuber.name}</a>
                        </section>   
                    )
                })}     
            </div>
            

            
        </StyledFavorites>
    )
}
