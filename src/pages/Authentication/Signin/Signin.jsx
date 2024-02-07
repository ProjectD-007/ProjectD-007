import CommonMode from './CommonMode';
import Mobile from './Mobile';
import { useDispatch } from 'react-redux';
import { toggleLogin } from '../../../redux/slice/homepage/homepage';
import WithPasssword from './WithPasssword';
import Create from './Create';

export default function Signin({ mode }) {
  const dispatch = useDispatch();

  console.log(mode);

  switch (mode) {
    case 'password':
      return (
        <CommonMode
          onChange={(data) => dispatch(toggleLogin(data))}
          children={
            <WithPasssword onChange={(data) => dispatch(toggleLogin(data))} />
          }
        />
      );

    case 'create':
      return (
        <CommonMode
          mode={mode}
          onChange={(data) => dispatch(toggleLogin(data))}
          children={<Create onChange={(data) => dispatch(toggleLogin(data))} />}
        />
      );

    default:
      return (
        <CommonMode
          onChange={(data) => dispatch(toggleLogin(data))}
          children={<Mobile onChange={(data) => dispatch(toggleLogin(data))} />}
        />
      );
  }
}
