import React from 'react';
import styles from '../styles/TanggalLahirInput.module.css';

const TanggalLahirInput = ({ label, value, onChange }) => {
  const handleDateChange = (type, val) => {
    const date = { ...value, [type]: val };
    onChange(date);
  };

  return (
    <div className={styles.tanggalLahirParent}>
      <div className={styles.tanggalLahir}>{label}</div>
      <div className={styles.frameParent}>
        <div className={styles.mmParent}>
          <input
            type="text"
            className={styles.input}
            value={value.mm}
            onChange={(e) => handleDateChange('mm', e.target.value)}
            placeholder="MM"
          />
          <img className={styles.vectorIcon} alt="" src="pickHolder.png" />
        </div>
        <div className={styles.yyyyParent}>
          <input
            type="text"
            className={styles.input}
            value={value.yyyy}
            onChange={(e) => handleDateChange('yyyy', e.target.value)}
            placeholder="YYYY"
          />
          <img className={styles.vectorIcon} alt="" src="pickHolder.png" />
        </div>
        <div className={styles.ddParent}>
          <input
            type="text"
            className={styles.input}
            value={value.dd}
            onChange={(e) => handleDateChange('dd', e.target.value)}
            placeholder="DD"
          />
          <img className={styles.vectorIcon} alt="" src="pickHolder.png" />
        </div>
		
      </div>
    </div>
  );
};

export default TanggalLahirInput;
