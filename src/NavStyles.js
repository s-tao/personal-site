import styled from 'styled-components';

export const NavStyle = styled.div`
  position: absolute;
  width: 45px;
  ${'' /* margin: 10px 0; */}
  text-align: center;
  height: 100vh;
  background-color: #000000;
  opacity: 60%;
  display: grid;
  align-content: center;
`;

export const IconStyle = styled.p`
  margin: 12px 0;
  color: #ffffff;
  transition: all .3s ease-in-out;
  :hover {
    color: #bde0e5;
    cursor: pointer;
    transition: all .3s ease-in-out;
    transform: scale(1.3);
  }
`;