import React from "react"
import {createRoot} from "react-dom/client"


export const VideoContext = React.createContext({
    addVideo: (video, playlistName, setFormVisible, setVideoVisible) => {
        if(video.title.length < 5){ 
            alert("Digite um Titulo com no minimo 5 caracteres!")
        }
        else if(video.url.length < 35){
            alert("Digite uma URL válida")
        }
        else{
            var thumb = video.url.replace("www.youtube.com/watch?v=","img.youtube.com/vi/")
            var index = thumb.indexOf("&")
            thumb = index !== -1 ? thumb.substring(0, index) : thumb
            const videoWithThumb = {...video, thumb: thumb +"/hqdefault.jpg"}

            const playlist = document.getElementById(playlistName).lastChild
            const html = document.createElement("a")
            playlist.append(html)
       
            createRoot(playlist.lastChild).render(
                <Video video={videoWithThumb} setVideoVisible={setVideoVisible.setVideoVisible}/>
            )

            playlist.scrollBy(10000,0)
            // default
            setFormVisible(false)
            video.url = ""
            video.title = ""
        }
        
    }
})

export default function Video({video, setVideoVisible}){
    return(
        <a className="video" href={video.url} onClick={
            (event) => {                               
                event.preventDefault();
                var url = video.url           
                if(url.indexOf("&") !== -1){
                    url = url.substring(0, video.url.indexOf("&"))
                }
                setVideoVisible({url: url.replace("/watch?v=","/embed/"), state: true})
            }
        } >
            <img src={video.thumb} 
                onMouseLeave={(props) => {
                props.target.src = video.thumb
            }}  onMouseEnter={(props) => {
                props.target.src = video.animate !== undefined ? video.animate : props.target.src
        }}/>
            <span>
                {video.title}
            </span>
        </a>
    )
   
}