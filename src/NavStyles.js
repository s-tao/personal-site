import styled from 'styled-components';

export const NavStyle = styled.div`
  position: absolute;
  width: 45px;
  ${'' /* margin: 10px 0; */}
  text-align: center;
  height: 100vh;
  ${'' /* background-color: #000000; */}
  ${'' /* opacity: 60%; */}
  display: grid;
  align-content: center;
`;

export const IconStyle = styled.p`
  margin: 8px 0;
  color: #46484A;
  transition: all .3s ease-in-out;
  :hover {
    color: #ffffff;
    cursor: pointer;
    transition: all .3s ease-in-out;
    transform: scale(1.3);
  }
`;