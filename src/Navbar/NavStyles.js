import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const NavContainer = styled.div`
  display: flex;
  height: 50px;
  margin: 25px;
  align-items: center;
`;

export const Navbar = styled.div`
  ${'' /* padding: 8px; */}
  display: flex;
  height: 25px;
  justify-content: start;
`;

export const LinkStyle = styled(NavLink)`
  padding: 0 15px;
  text-decoration: none;
  font-weight: bold;
  color: ${props => props.color};
  :hover {
      color: ${props => props.hover};
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  height: 25px;
  margin-left: auto;
`;

export const IconStyle = styled(FontAwesomeIcon)`
  margin: 0 12px;
  color: ${props => props.color};
  :hover {
      color: ${props => props.hover};
`;
