import React from 'react';
import styled from 'react-emotion';

import MenuItem from './menu-item';
import LogoutButton from '../containers/logout-button';
import { ReactComponent as HomeIcon } from '../assets/icons/home.svg';
import { colors, unit } from '../styles';

export default function Header() {
  return (
    <Container>
      <InnerContainer>
        <MenuItem to="/">
          <HomeIcon />
          Home
        </MenuItem>
        <LogoutButton />
      </InnerContainer>
    </Container>
  );
}

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const Container = styled('header')({
  flexShrink: 0,
  marginTop: 'auto',
  backgroundColor: 'white',
  color: colors.primary,
  position: 'sticky',
  bottom: 0,
});

const InnerContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  maxWidth: 460,
  padding: unit * 2.5,
  margin: '0 auto',
});
