import React from 'react';
import './style.less';

interface ButtonProps {
  text: string;
  onClick: Function;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
  <div
    className="button"
    onClick={() => {
      onClick();
    }}
  >
    {text}
  </div>
);

export default Button;
