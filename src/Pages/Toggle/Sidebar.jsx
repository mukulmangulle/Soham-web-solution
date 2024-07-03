
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { BiFontSize } from 'react-icons/bi';

const Nav = styled.div`
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

 
`;

const NavIcon = styled(Link)`
  margin-right: 40px;
  font-size: 2rem;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

`;

const SidebarNav = styled.nav`
  background: #053480;
  width:300px;
  height: 100vh;
  display: flex;
  overflow: scroll;
  justify-content: center;
  position: absolute;
  top: 100%;
  right: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 450ms;
  z-index: 10;
  padding:15px

  // Conditionally hide the sidebar based on the sidebar prop
  ${props =>
    !props.sidebar &&
    css`
      display: none;
    `}
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} size={35} />
          </NavIcon>
        </Nav>

        {sidebar && (
          <SidebarNav sidebar={sidebar.toString()}>
            <SidebarWrap>
              <NavIcon to='#'>
                <AiIcons.AiOutlineClose onClick={showSidebar} className='cross_icon' />
              </NavIcon>
              {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index}  />;
              })}
            </SidebarWrap>
          </SidebarNav>
        )}
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
