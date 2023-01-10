import React from "react";
import { StyledTimeline } from "./styles"
import Video from "./Video";


export function Timeline({searchValue, videoVisible, setVideoVisible, ...props}){  
    const playlistNames = Object.keys(props.playlists)
    
    function scroll(value, event){
        const divElement = event.currentTarget.parentElement
        divElement.scrollBy(value, 0)
    }
   
    return(
        <StyledTimeline>            
            {playlistNames.map((playListName) => {
                const videos = props.playlists[playListName]                
                return (
                    <section key={playListName}>
                        <h2>{playListName}</h2>                  
                        <div> 
                            {searchValue === "" ? (
                                <>              
                                    <button style={{right: "15px"}} onClick={(event) => scroll(50,event)}>{'>'}</button>
                                    <button onClick={(event) => scroll(-50,event)}>{'<'}</button>
                                </> 
                            ) : null}              
                            
                            {videos.filter((video) => {
                                const titleNormalized = video.title.toLowerCase()
                                const searchValueNormalized = searchValue.toLowerCase()
                                return titleNormalized.includes(searchValueNormalized)
                            }).map((video) => {                                
                                return (
                                    <Video 
                                        videoVisible={videoVisible} 
                                        setVideoVisible={setVideoVisible} 
                                        key={video.url} 
                                        video={video}/>
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