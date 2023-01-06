import styled from "styled-components";

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

export function Favorites(props){
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