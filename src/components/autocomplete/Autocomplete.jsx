import { useState, forwardRef } from "react";
import styles from "./styles.module.css";
const Autocomplete = forwardRef(function Autocomplete({ ...inputProps }, ref) {
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const { options, onChange } = inputProps;

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
    <div>
      <input
        autoComplete="one-time-code"
        {...inputProps}
        ref={ref}
        className={styles["autocomplete-input"]}
        type="text"
        onInput={filterOnInput}
        onBlur={(event) => {
          setIsFocused(false);
          inputProps.onBlur && inputProps.onBlur(event);
        }}
        onFocus={() => setIsFocused(true)}
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
  );
});

export default Autocomplete;
