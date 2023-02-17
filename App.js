import React, { useState, useEffect } from 'react';
import { Root } from "native-base";
import { store } from './src/_helpers/store';
import { Provider } from 'react-redux';
import Routes from './src/Routes/Routes';

// import { requestUserPermission, notificationListner } from './src/Routes/notification'

function App() {

  // useEffect(() => {
  //   // createChannel()
  //   requestUserPermission()
  //   notificationListner()
  // }, []);

  return (

    <Provider store={store}>

      <Root>
        <Routes />
      </Root>

    </Provider>

  );
}

export default App;





