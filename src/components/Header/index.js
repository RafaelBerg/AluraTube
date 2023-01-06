import config from "../../../config.json"
import styled from "styled-components";

const StyledHeader = styled.div`
    background-color: ${({theme}) => theme.backgroundLevel1};
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

export function Header(){
    return(
        <StyledHeader>
            {<div style={{
                width: "100%",
                height: "260px",
                backgroundImage: `url(${config.bg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center" ,
                backgroundPositionY: "-35px",
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