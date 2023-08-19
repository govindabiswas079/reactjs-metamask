import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomeScreen } from './Screens/HomeScreen';
import { MetaMaskScreen } from './Screens/MetaMaskScreen';

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/' Component={HomeScreen} />
        <Route path='/connect-metamask' Component={MetaMaskScreen} />
      </Routes>
    </Fragment>
  )
}

export default App