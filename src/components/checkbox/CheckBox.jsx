import styles from "./styles.module.css";
import { forwardRef } from "react";

const CheckBox = forwardRef(function CheckBox({ ...checkBoxProps }, ref) {
  return (
    <label className={styles.container}>
      <input ref={ref} {...checkBoxProps} type="checkbox" />
      {checkBoxProps.content}
      <span className={styles.checkmark}></span>
    </label>
  );
});

export default CheckBox;
