import PropTypes from "prop-types";
import styles from "./styles.module.css";

function Button({
  type = "button",
  style,
  onClick,
  iconSource,
  children,
  isActive = false,
}) {
  const handleClick = () => {
    onClick();
  };
  return (
    <button
      className={`${styles["custom-button"]} ${
        isActive ? styles["active"] : ""
      }`}
      onClick={handleClick}
      style={{ ...style }}
      type={type}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
        {iconSource ? (
          <img className={styles["image-content"]} src={iconSource} />
        ) : (
          ""
        )}
        {children}
      </div>
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  setActive: PropTypes.func,
  style: PropTypes.object,
  iconSource: PropTypes.string,
  isActive: PropTypes.bool,
};
export default Button;
