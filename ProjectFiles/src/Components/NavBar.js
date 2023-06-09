import React from "react";
import styled from "styled-components";
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faX} from '@fortawesome/free-solid-svg-icons'

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #f2f2f2;
  padding: 10px;
  height: 50px;
  font-weight: bold;
  color: #333;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    top: 30px;
  }

  li {
    display: block;
    margin-right: 10px;
    position: relative;
  }

  a {
    text-decoration: none;
    color: #333;
    padding: 10px;
    display: block;
`
const NavLinksContainer = styled.div`
  display: flex;
`
const NavContent = styled.a`
  position: absolute;
  left: 0;
  top: 15px;
  color: #333;
  text-decoration: none;
  padding: 0 10px;
  margin-right: 10px;
  font-weight: bold;
`
const CollapsibleNavLink = styled.div`
  display: ${props => props.coll? 'none':'flex'};
  flex: 1;
`
const CollapsibleLinksContainer = styled.div`
  display: flex;
  position: absolute;
  flex-shrink: 0;
  padding-right: 15px;
  margin-right: 10px;
  left: 50px;
  top: 30px;
  width: 300px;
  
`
const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
`
const SearchContainer = styled.span`
  position: absolute;
  right: 10px;
  top:20px;
`
const SearchBar = styled.input`
  padding: 5px;
  margin-left: 5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  height: 10px;
`
const DropdownContent = styled.ul`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  top: 100%;
  left: 0;
`;
const DropdownNavItem = styled.li`
  &:hover ${DropdownContent} {
    display: block;
  }
`;

function NavBar(){
    const [collapse, setCollapse] = useState(true)
    //const [isOpen, setOpen] = useState(false)
    const [dropStyle, setStyle] = useState({})

    const toggleNav  = () =>{
        setCollapse(!collapse)
    }


    const iconStyle = {
        transition: 'transform 0.3s ease-in-out',
        transform: collapse ? 'rotate(0turn)' : 'rotate(0.5turn)',
    };
    return(
        <NavContainer>
            <NavLinksContainer>
                <NavContent>
                    <ToggleButton onClick={toggleNav}>
                        <FontAwesomeIcon icon={collapse? faBars:faX} style={iconStyle} />
                    </ToggleButton>
                    {collapse && <span>Browse</span>}
                </NavContent>
                <CollapsibleLinksContainer>
                    <CollapsibleNavLink coll={collapse} onMouseEnter={() => setStyle({display: 'block'})} onMouseLeave={() => setStyle({display:'none'})}>
                        Popular Authors
                        <DropdownContent
                            //isOpen={isOpen}
                            style={dropStyle}
                            onMouseEnter={() => setStyle({display: 'block'})}
                            onMouseLeave={() => setStyle({display:'none'})}
                        >
                            <li>
                                <a href="#">Service 1</a>
                            </li>
                            <li>
                                <a href="#">Service 2</a>
                            </li>
                            <li>
                                <a href="#">Service 3</a>
                            </li>
                        </DropdownContent>
                    </CollapsibleNavLink>
                    <CollapsibleNavLink coll={collapse} onMouseEnter={() => setStyle({display: 'block'})} >
                        Popular Genres
                        <DropdownContent
                            //isOpen={isOpen}
                            style={dropStyle}
                            onMouseEnter={() => setStyle({display: 'block'})}
                            onMouseLeave={() => setStyle({display:'none'})}
                        >
                            <li>
                                <a href="#">Service 2</a>
                            </li>
                            <li>
                                <a href="#">Service 3</a>
                            </li>
                            <li>
                                <a href="#">Service 1</a>
                            </li>
                        </DropdownContent>
                    </CollapsibleNavLink>
                </CollapsibleLinksContainer>
            </NavLinksContainer>
            <SearchContainer>
                Search <SearchBar type="text" placeholder="Search..."/>
            </SearchContainer>
        </NavContainer>
    )
}
export default NavBar