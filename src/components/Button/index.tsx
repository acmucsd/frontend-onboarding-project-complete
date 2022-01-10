import React from 'react';
import './style.less';

interface ButtonProps {
  text: string;
  onClick: Function;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { text, onClick } = props;
  return (
    <button
      className="button"
      type="button"
      onClick={() => {
        onClick();
      }}
    >
      {text}
    </button>
  );
};

export default Button;
