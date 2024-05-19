'use client'
import styles from './ToggleSwitch.module.css'
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export interface ToggleSwitchProps {
  name: string;
  initialValue:boolean
  onChange: (value: boolean) => void;
}
const ToggleSwitch =({name, onChange, initialValue}:ToggleSwitchProps) => {
  const [isOn, setIsOn] = useState(true)
  const handleChange = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    onChange(newValue);
  };

  useEffect(() => {
    setIsOn(initialValue);
  }, [initialValue]);
  return (
    <div className={styles.toggleSwitch}>
      <input
        type="checkbox"
        className={styles.toggleSwitchCheckbox}
        name={name}
        id={name}
        checked={isOn}
        onChange={handleChange}
      />
      <label className={styles.toggleSwitchLabel} htmlFor={name}>
        <span className={styles.toggleSwitchInner}  />
        <span className={styles.toggleSwitchSwitch} />
      </label>
    </div>
  );
}

export default ToggleSwitch