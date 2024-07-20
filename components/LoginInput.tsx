import React from 'react';
import styles from '../styles/Home.module.css'

const TextInput = ({ label, value, onChange }) => {
  return (
    <div className={styles.nomerPonselAtauEmailWrapper}>
      <div className={styles.nomerPonselAtau}>{label}</div>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
const PasswordInput = ({ label, value, onChange }) => {
  return (
    <div className={styles.nomerPonselAtauEmailWrapper}>
      {/* <div className={styles.kataSandiParent}> */}
        <div className={styles.kataSandi}>{label}</div>
        <input
          type="password"
          className={styles.input}
          value={value}
          onChange={onChange}
        />
        <img className={styles.fieyeOffIcon} alt="" src="fi:eye-off.svg" />
      {/* </div> */}
    </div>
  );
};

export { TextInput, PasswordInput };
