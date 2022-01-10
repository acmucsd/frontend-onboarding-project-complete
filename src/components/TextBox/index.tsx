import React from 'react';
import './style.less';

interface TextBoxProps {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (text: string) => void;
  inputType: React.HTMLInputTypeAttribute;
}

const TextBox: React.FC<TextBoxProps> = ({ label, value, placeholder = '', inputType, onChange }) => (
  <div className="textbox">
    <label htmlFor={label}>{label}</label>
    <input type={inputType} id={label} value={value} placeholder={placeholder} name={label} onChange={(e) => onChange(e.target.value)} />
    <br />
  </div>
);

export default TextBox;
