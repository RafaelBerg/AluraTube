import styled from "styled-components";

export const StyledVideoPlayer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  div{
    flex-direction: column; 
    position:fixed; 
    align-self: center;
  } 
  button{
    color: white;
    background-color: red;
    border: 0px;
    right: 1px; top: 1px;
    opacity: 0.8;
    position: absolute; 
    width: 30px; 
    height: 25px; 
    align-self:flex-end;
    cursor: pointer;
  }
  iframe{
    border: 0px;
    width: 720px; 
    height: 440px;
  }
`;