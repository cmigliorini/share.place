import styled, { keyframes} from 'react-emotion';
import { size } from 'polished';

import { ReactComponent as Logo } from '../assets/loading.svg';
import { colors } from '../styles';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;
// class Loading extends Component {
//   render() {
//     return <div>Logo</div>
//   }
// }

const Loading = styled(Logo)(size(64), {
  display: 'block',
  margin: 'auto',
  fill: colors.grey,
  path: {
    transformOrigin: 'center',
    animation: `${spin} 1s linear infinite`,
  },
});

export default Loading;
