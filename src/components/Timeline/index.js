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
                                    <a key={video.url} className="video" href={video.url} >
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