import React from 'react';
import { YellowBox } from 'react-native';

import 'react-native-gesture-handler';

import Routes from './routes';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

function App() {
  return (
    <Routes />
  );
};

export default App;
