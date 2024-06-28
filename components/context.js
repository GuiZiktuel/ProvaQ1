import React, { createContext, useState } from 'react';

const context = createContext({
  user: null,
  setUser: () => {},
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const value = { user, setUser };

  return <context.Provider value={value}>{children}</UserContext.Provider>;
};

export { context, UserProvider };
