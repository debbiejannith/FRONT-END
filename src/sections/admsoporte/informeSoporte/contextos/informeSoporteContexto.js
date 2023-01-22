import { createContext, useState } from 'react';

export const InformeSoporteContext = createContext();

// eslint-disable-next-line react/prop-types
export const InformeSoporteProvider = ({ children }) => {
  const ping = () => {
    alert("oeee flaco ponte pilas ");
  }
  const ping2 = () => {
    alert("flaco jugeteamo el arroz");
  }

  return (
    <InformeSoporteContext.Provider
      value={{
        ping,
        ping2
      }}
    >
      {children}
    </InformeSoporteContext.Provider>
  );
};
