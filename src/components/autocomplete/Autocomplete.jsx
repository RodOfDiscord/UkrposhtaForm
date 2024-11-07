import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./styles.module.css";
function Autocomplete({ options, value, onChange }) {
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const filterOnInput = (event) => {
    if (event.target.value.length === 0) setFilteredOptions([]);
    else
      setFilteredOptions(
        options.filter((option) => option.text.includes(event.target.value))
      );
  };
  const applyInputValue = (event) => {
    onChange({ target: { value: event.target.innerHTML } });
  };

  return (
    <>
      <div>
        <input
          className={styles["autocomplete-input"]}
          type="text"
          value={value}
          onChange={onChange}
          onInput={filterOnInput}
          onBlur={() => {
            setIsFocused(false);
          }}
          onFocus={() => {
            setIsFocused(true);
          }}
        />
        <div className={styles["dropdown-container"]}>
          <ul className={isFocused ? "" : styles["hidden"]}>
            {filteredOptions.map((option) => (
              <li
                className={styles["list-item"]}
                onMouseDown={applyInputValue}
                key={option.id}
              >
                {option.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

Autocomplete.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Autocomplete;
