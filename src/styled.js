import styled from 'styled-components';

export const Container = styled.div`
  ${'' /* justify-content: center; */}
  display: flex;
  margin: auto;
  height: 100vh;
  width: 100%;
  flex-wrap: wrap;
  ${'' /* padding: 15px; */}
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
  align-items: center;
  ${'' /* margin: 10px; */}
`;

export const ProjectChild = styled.div`
  display: inline-block;
  width: 250px;
  height: 200px;
  background-color: #ffffff;
  opacity: 95%;
  border-radius: 5px;
  padding: 10px;

`;

export const ProjectContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(200px, 1fr));
  ${'' /* grid-template-rows: auto; */}
  justify-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 45px;
  padding: 30px;

`;

