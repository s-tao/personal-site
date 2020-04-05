import styled from 'styled-components';

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  margin: auto;
  height: 100vh;
`;

export const FlipContainer = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: auto 8%;
  padding: 25px; 
  display: grid;
  background-color: #ffffff;
  opacity: 95%;
  outline: solid 1px #c1cfd3;
  background-size: cover;
  background-position: 50%;
  background-position-x: 50%;
  background-position-y: center;
  ${'' /* border-radius: 10px; */}
`;
      
export const Block = styled.div`
  display: flex;
  justify-content: center;
`