
import React from 'react';
import { Provider } from 'react-redux';
import MatchList from './src/Components/MatchList'

import store from './src/store/store';
import MatchScreen from './src/Screens/MatchScreen';

const App: React.FC = () => {
  return (
    <Provider store={store}>
        <MatchScreen/>
    </Provider>
  );
};

export default App;
