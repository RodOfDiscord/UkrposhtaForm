import { forwardRef } from "react";
import styles from "./styles.module.css";
const TextInput = forwardRef(function TextInput({ ...inputProps }, ref) {
  return (
    <>
      <input
        {...inputProps}
        ref={ref}
        className={styles["custom-input"]}
        type="text"
      />
    </>
  );
});

export default TextInput;
