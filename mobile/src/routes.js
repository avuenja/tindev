import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Main from './pages/Main';

const appContainer = createAppContainer(
  createSwitchNavigator({
    Login,
    Main
  })
);

export default appContainer;
