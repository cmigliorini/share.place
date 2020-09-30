import styled, { keyframes} from 'react-emotion';
import { size } from 'polished';

import Logo from '../assets/logo.png';
import { colors } from '../styles';
import React, { Component } from 'react';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;
class Loading extends Component {
  render() {
    return <div>Logo</div>
  }
}
// const Loading = styled(Loading1)(size(64), {
//   display: 'block',
//   margin: 'auto',
//   fill: colors.grey,
//   path: {
//     transformOrigin: 'center',
//     animation: `${spin} 1s linear infinite`,
//   },
// });
export default Loading;
