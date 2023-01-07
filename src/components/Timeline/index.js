import { StyledTimeline } from "./styles"

export function Timeline({searchValue, ...props}){
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
                                    <a key={video.url} className="video" href={video.url} onClick={
                                        (event) => {
                                            event.preventDefault()
                                            function blur(value){
                                                body.childNodes.forEach(element => {
                                                    let letra = element.className.slice(0,1)
                                                    if(letra !== "H" && letra !== "M" ){                                                                     
                                                        element.setAttribute("style", "filter: blur(" + value + "px)")
                                                    }
                                                }); 
                                            }
                                            const body = document.querySelector("#body")
                                            if(body.lastChild.id === "bloco"){
                                                return
                                            }
                                            const bloco = document.createElement("div")   
                                            bloco.id = "bloco"                                                                                    
                                            bloco.setAttribute("style", "display:flex; flex-direction: column; position:fixed; align-self: center;margin-top: 200px")  

                                            // button
                                            const buttonVideo = document.createElement("button")
                                            buttonVideo.innerText = "X"
                                            buttonVideo.setAttribute("style", "opacity: 0.8;position:absolute; width: 40px; height:30px; align-self:flex-end")
                                            buttonVideo.onclick = function(){
                                                body.removeChild(bloco)
                                                blur("")
                                            }
                                            bloco.appendChild(buttonVideo)

                                            // video  
                                            const videoFrame = document.createElement("iframe")
                                            videoFrame.id = "ytplayer"       
                                            videoFrame.setAttribute("type", "text/html")                       
                                            videoFrame.setAttribute("style", "width: 620px; height: 340px;")                                    
                                            videoFrame.src = video.url.replace("/watch?v=","/embed/")                                                      
                                            bloco.appendChild(videoFrame)

                                            blur(2)                                                                                                            
                                            body.appendChild(bloco)                                                        
                                        }
                                    } >
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