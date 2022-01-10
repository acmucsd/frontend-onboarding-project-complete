import React from 'react';
import './style.less';

interface ButtonProps {
  text: string;
  onClick: Function;
  enabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, enabled = true }) => {
  return (
    <button
      className={`button ${enabled ? 'enabled' : 'disabled'}`}
      type="button"
      onClick={() => {
        if (enabled) {
          onClick();
        }
      }}
    >
      {text}
    </button>
  );
};

export default Button;
