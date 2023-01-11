import { StyledVideoPlayer } from "./styles";

export default function VideoPlayer({videoVisible, setVideoVisible}){
    return(
        <StyledVideoPlayer>
            <div>
                <button type="button" onClick={() => setVideoVisible({...videoVisible, state:false})}>X</button>
                <iframe src={videoVisible.url}></iframe>
            </div>
        </StyledVideoPlayer>
    )
}