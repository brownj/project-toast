import React from "react";
import Button from "../Button";
import Toast from "../Toast";
import ToastShelf from "../ToastShelf";
import styles from "./ToastPlayground.module.css";

export const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [toastOpen, setToastOpen] = React.useState(false);
  const [selectedToastType, setSelectedToastType] = React.useState("");
  const [toastList, setToastList] = React.useState(null);

  React.useEffect(() => {
    setSelectedToastType(VARIANT_OPTIONS[0]);
  }, []);

  function handleAddToastClick() {
    console.log("toast now should be open");
    setToastOpen(true);
  }

  return (
    <>
      <div className={styles.wrapper}>
        <header>
          <img alt="Cute toast mascot" src="/toast.png" />
          <h1>Toast Playground</h1>
        </header>

        {toastOpen && (
          <Toast
            toastType={selectedToastType}
            setToastOpen={setToastOpen}
          ></Toast>
        )}

        <ToastShelf />

        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea id="message" className={styles.messageInput} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>
              Variant - current: {selectedToastType}
            </div>
            {VARIANT_OPTIONS.map((option) => {
              const componentName = "variant-" + option;
              const checked = option === selectedToastType;
              return (
                <div
                  key={option}
                  className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                >
                  <label htmlFor={componentName}>
                    <input
                      id={componentName}
                      type="radio"
                      name={componentName}
                      value={option}
                      checked={checked}
                      onChange={(event) => {
                        setSelectedToastType(event.target.value);
                      }}
                    />
                    {option}
                  </label>
                </div>
              );
            })}
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button onClick={handleAddToastClick}>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToastPlayground;
