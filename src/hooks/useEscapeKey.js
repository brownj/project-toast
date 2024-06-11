import React from "react";

//create a custom hook to handle the escape key

export const useEscapeKey = (escapeKeyCallback) => {
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        escapeKeyCallback();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [escapeKeyCallback]);
};
