import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

import VARIANT_OPTIONS from "../ToastPlayground"; //"notice", "warning", "success", "error"

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

const iconSize = 24;

function Toast({ toastType, setToastOpen }) {
  function handleCloseClick() {
    setToastOpen(false);
  }

  let classNameForToast;
  let IconTagForToast;
  switch (toastType) {
    case "notice": //case VARIANT_OPTIONS[0]:
      classNameForToast = styles.notice;
      IconTagForToast = ICONS_BY_VARIANT["notice"];
      break;
    case "warning": //case VARIANT_OPTIONS[1]:
      classNameForToast = styles.warning;
      IconTagForToast = ICONS_BY_VARIANT["warning"];
      break;
    case "success": //case VARIANT_OPTIONS[2]:
      classNameForToast = styles.success;
      IconTagForToast = ICONS_BY_VARIANT["success"];
      break;
    case "error": //case VARIANT_OPTIONS[3]:
      classNameForToast = styles.error;
      IconTagForToast = ICONS_BY_VARIANT["error"];
      break;
    default:
      classNameForToast = "";
      IconTagForToast = X;
      break;
  }

  if (classNameForToast === "") {
    return <></>;
  }

  return (
    <div className={`${styles.toast} ${classNameForToast}`}>
      <div className={styles.iconContainer}>
        <IconTagForToast size={24} />
      </div>
      <p className={styles.content}>16 photos have been uploaded</p>
      <button className={styles.closeButton} onClick={handleCloseClick}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
