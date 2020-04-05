import styled from 'styled-components';

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  margin: auto;
  height: 100vh;
  width: 100%;
`;

export const FlipContainer = styled.div`
  ${'' /* position: absolute; */}
  justify-content: center;
  align-items: center;
  width: 680px;
  height: 300px;
  margin: auto 8%;
  padding: 3%; 
  display: grid;
  background-color: #ffffff;
  opacity: 95%;
  ${'' /* outline: solid 1px #c1cfd3; */}
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 5px;
`;
      
export const Block = styled.div`
  display: flex;
  justify-content: center;
`
