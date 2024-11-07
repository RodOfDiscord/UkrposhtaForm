import PropTypes from "prop-types";
import styles from "./styles.module.css";

function CheckBox({ value, onChange, content, style }) {
  return (
    <label className={styles.container}>
      <input
        value={value}
        onChange={onChange}
        style={{ ...style }}
        type="checkbox"
      />
      {content}
      <span className={styles.checkmark}></span>
    </label>
  );
}

CheckBox.propTypes = {
  value: PropTypes.string,
  content: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
};

export default CheckBox;
