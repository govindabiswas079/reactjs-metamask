import React, { Fragment } from 'react';
import MetamaskLogo from '../Components/MetaMask/MetaMask';

export const MetaMaskScreen = () => {
  return (
    <Fragment>
      <div style={{ width: '100%', height: '100%', backgroundColor: '#ffffff', zIndex: 999, justifyContent: 'center', display: 'flex', }}>
        <div>
          <MetamaskLogo />
          
        </div>
      </div>
    </Fragment>
  )
}
