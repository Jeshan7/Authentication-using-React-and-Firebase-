import React from 'react';

const authContext = React.createContext({
  userEmail: null,
  login: () => {}
})

export default authContext;