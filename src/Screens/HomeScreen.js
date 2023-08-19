import React, { Fragment } from 'react';

export const HomeScreen = () => {

  return (
    <Fragment>
      <div style={{ height: '90vh', width: '100%', backgroundColor: '#FFFFFF', justifyContent: "center", alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
        <button
          style={{ backgroundColor: 'green', cursor: 'pointer', border: 'none', width: 140, height: 35, borderRadius: 10, color: '#FFFFFF', fontSize: 14, fontWeight: 600 }}
          target="_blank"
          onClick={() => window.open('/connect-metamask', 'target=_blank', `window=yes,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=no,height=600px,width=300px,top=0,left=${window.screen.width - 300}`)}
        >
          OPEN
        </button>
      </div>
    </Fragment>
  )
}
