import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const NavContainer = styled.div`
  display: flex;
  margin: 25px;
  align-items: center;
  justify-content: space-between;
`;

export const Navbar = styled.div`
  display: flex;
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
`;

export const IconStyle = styled(FontAwesomeIcon)`
  margin: 0 12px;
  color: ${props => props.color};
  :hover {
      color: ${props => props.hover};
`;

/* mobile responsive */
export const MobileNavContainer = styled(NavContainer)`
  position: fixed;
  width: 100vw;
  bottom: 0;
  margin: 0;
  padding: 12px 24px;
  background-color: #FFFFFF;
  -webkit-box-shadow: 0px -1px 2px rgba(230,230,230,1);
  -moz-box-shadow: 0px -1px 2px rgba(230,230,230,1);
  box-shadow: 0px -1px 2px rgba(230,230,230,1);
`;

export const MobileNavbar = styled(Navbar)`
  flex: 1;
  padding: 0;
  justify-content: space-around;
  font-size: 12px;
`;

export const MobileNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MobileSocialMedia = styled.a`
  color: ${props => props.color};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MobileIconStyle = styled(IconStyle)`
`;
