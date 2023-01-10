export default function Video({video, videoVisible, setVideoVisible}){
    return(
        <a className="video" href={video.url} onClick={
            (event) => {                                          
                event.preventDefault();
                setVideoVisible({url: video.url.replace("/watch?v=","/embed/"), state: true})
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
   
}