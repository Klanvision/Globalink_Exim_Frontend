import React, { createContext, useContext, useState } from 'react';

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  // In-place skeleton state (false by default so navigation is instant & never blocked)
  const [isLoading, setIsLoading] = useState(false);
  const [isSkeletonDemo, setIsSkeletonDemo] = useState(false);
  const [loadingRoute, setLoadingRoute] = useState(null);

  const toggleSkeletonDemo = () => {
    setIsSkeletonDemo((prev) => !prev);
  };

  // Optional trigger for in-page actions (like search or data refetch)
  const triggerActionLoading = (callback, duration = 400) => {
    setIsLoading(true);
    setTimeout(() => {
      if (callback) callback();
      setIsLoading(false);
    }, duration);
  };

  const activeLoading = isLoading || isSkeletonDemo;

  return (
    <LoadingContext.Provider
      value={{
        isLoading: activeLoading,
        isSkeletonDemo,
        toggleSkeletonDemo,
        setIsLoading,
        triggerActionLoading,
        loadingRoute,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

