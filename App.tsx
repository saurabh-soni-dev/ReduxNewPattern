import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Login from './src/screens/auth/login/Login';
import store from './src/services/reduxToolkit/store';

const App = () => {
  const persistStore = store();

  return (
    <Provider store={persistStore.store}>
      <PersistGate loading={null} persistor={persistStore.persistor}>
        <Login />
      </PersistGate>
    </Provider>
  );
};

export default App;
