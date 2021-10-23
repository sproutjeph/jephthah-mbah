import React, { useState, useContext, useLayoutEffect } from 'react';

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  useLayoutEffect(() => {
    const currentPosition = window.pageYOffset;
    setScrollPosition(currentPosition);
    window.addEventListener('scroll', () => {
      setScrollPosition(window.pageYOffset);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        setScrollPosition(window.pageYOffset);
      });
    };
  }, []);

  return (
    <AppContext.Provider value={{ isOpen, setIsOpen, scrollPosition }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
