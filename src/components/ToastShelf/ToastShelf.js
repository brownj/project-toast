import React from "react";

import Toast from "../Toast";
import { ToastProviderContext } from "../ToastProvider";
import styles from "./ToastShelf.module.css";
import VisuallyHidden from "../VisuallyHidden";

function ToastShelf({}) {
  const { toastList, createToast, removeToastWithId } =
    React.useContext(ToastProviderContext);

  const toasts = toastList;

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            id={toast.id}
            variant={toast.variant}
            handleDismiss={removeToastWithId}
          >
            <VisuallyHidden>error</VisuallyHidden>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
