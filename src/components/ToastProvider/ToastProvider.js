import React from "react";

export const ToastProviderContext = React.createContext();

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([]);

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
