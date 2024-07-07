import React from 'react';
import styles from '@/app/styles/components/molecules/FormField.module.css';

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const FormField: React.FC<FormFieldProps> = ({ label, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={styles.formField}>
      <label className={styles.label}>{label}</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  );
};

export default FormField;