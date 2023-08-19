import styled from "styled-components";

const HomePageWrapper = styled.div`
  padding: 0;
  .shadowBlock {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.36); 
    backdrop-filter: blur(2px);
  }
`

export const S = {HomePageWrapper}