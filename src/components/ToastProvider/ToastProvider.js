import React from "react";

import { useEscapeKey } from "../../hooks/useEscapeKey";

export const ToastProviderContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);

  // function to clear all toasts
  function clearAllToasts() {
    setToastList([]);
  }

  function removeToastWithId(id) {
    const nextToastList = toastList.filter((toast) => toast.id !== id);
    setToastList(nextToastList);
  }

  function createToast(message, variant) {
    const newToast = {
      id: crypto.randomUUID(),
      message,
      variant,
    };

    const nextToastList = [...toastList, newToast];

    setToastList(nextToastList);
  }

  // // remove the last toast after 5 seconds
  React.useEffect(() => {
    const lastToast = toastList[toastList.length - 1];
    if (lastToast) {
      const timeoutId = setTimeout(() => {
        removeToastWithId(lastToast.id);
      }, 5000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [toastList]);

  useEscapeKey(clearAllToasts);

  return (
    <ToastProviderContext.Provider
      value={{
        toastList,
        createToast,
        removeToastWithId,
      }}
    >
      {children}
    </ToastProviderContext.Provider>
  );
}

export default ToastProvider;
