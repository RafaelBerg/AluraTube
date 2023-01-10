import { StyledVideoPlayer } from "./styles";

export default function VideoPlayer({videoVisible, setVideoVisible}){
    return(
        <StyledVideoPlayer>
            <div id="div-close">
                <button type="button" onClick={() => setVideoVisible({...videoVisible, state:!videoVisible})}>X</button>
                <iframe src={videoVisible.url}></iframe>
            </div>
        </StyledVideoPlayer>
    )
}