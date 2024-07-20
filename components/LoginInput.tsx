import React from 'react';
import styles from '../styles/Home.module.css';

const TextInput = ({ label, value, onChange }) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={onChange}
        placeholder={label} // Gunakan placeholder untuk label
      />
    </div>
  );
};

const PasswordInput = ({ label, value, onChange }) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        type="password"
        className={styles.input}
        value={value}
        onChange={onChange}
        placeholder={label} // Gunakan placeholder untuk label
      />
      <img className={styles.fieyeOffIcon} alt="" src="fieye-off.png" />
    </div>
  );
};

const PickInput = ({ label, value, onChange }) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={onChange}
        placeholder={label} // Gunakan placeholder untuk label
      />
      <img className={styles.fieyeOffIcon} alt="" src="pickHolder.png" />
    </div>
  );
};

export { TextInput, PasswordInput, PickInput };