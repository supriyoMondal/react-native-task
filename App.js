import React from 'react';
import {ThemeProvider} from 'react-native-elements';
import theme from './app/styles';
import TabNavigator from './app/navigator/TabNavigator';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <TabNavigator />
    </ThemeProvider>
  );
};

export default App;
