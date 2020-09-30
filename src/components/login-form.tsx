import React, { Component } from 'react';
import styled, { css } from 'react-emotion';
// import { size } from 'polished';
import { colors, unit } from '../styles';

import * as LoginTypes from '../pages/__generated__/Login';

interface LoginFormProps {
  loginFunction: (a: { variables: LoginTypes.LoginVariables }) => void;
}

interface LoginFormState {
  email: string;
  password: string;
}

export default class LoginForm extends Component<LoginFormProps, LoginFormState> {
  state = { email: '', password: '' };

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.name === 'email') {
      const email = (event.target as HTMLInputElement).value;
      this.setState(s => ({ email, }));
    }
    if (event.currentTarget.name === 'password') {
      const password = (event.target as HTMLInputElement).value;
      this.setState(s => ({ password }));
    }
  };

  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.loginFunction({ variables: { email: this.state.email, password: this.state.password } });
  };

  render() {
    return (
      <Container>
        <Header>
          {/*    <StyledCurve />
          <StyledLogo />*/}
        </Header>
        {/* <StyledRocket /> */}
        <Heading>Language Explorer</Heading>
        {/* <StyledForm onSubmit={(e) => this.onSubmit(e)}> */}
        <form onSubmit={(e) => this.onSubmit(e)}>
          <StyledInput
            required
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => this.onChange(e)}
          />
          <StyledInput
            required
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => this.onChange(e)}
          />
          <button type="submit">Log in</button>
        </form>
        {/* </StyledForm> */}
      </Container>
    );
  }
}

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flexGrow: 1,
  paddingBottom: unit * 6,
  color: 'white',
  backgroundColor: colors.primary,
  // backgroundImage: `url(${space})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});


const svgClassName = css({
  display: 'block',
  fill: 'currentColor',
});

const Header = styled('header')(svgClassName, {
  width: '100%',
  marginBottom: unit * 5,
  padding: unit * 2.5,
  position: 'relative',
});

const StyledInput = styled('input')({
  width: '100%',
  marginBottom: unit * 2,
  padding: `${unit * 1.25}px ${unit * 2.5}px`,
  border: `1px solid ${colors.grey}`,
  fontSize: 16,
  outline: 'none',
  ':focus': {
    borderColor: colors.primary,
  },
});
const Heading = styled('h1')({
  margin: `${unit * 3}px 0 ${unit * 6}px`,
});

