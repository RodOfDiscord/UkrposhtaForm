import PropTypes from "prop-types";
import styles from "./styles.module.css";
function TextInput({ placeHolder, value, onChange, style }) {
  return (
    <>
      <input
        className={styles["custom-input"]}
        placeholder={placeHolder}
        type="text"
        value={value}
        onChange={onChange}
        style={{ ...style }}
      />
    </>
  );
}

TextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeHolder: PropTypes.string,
  style: PropTypes.object,
};

export default TextInput;
