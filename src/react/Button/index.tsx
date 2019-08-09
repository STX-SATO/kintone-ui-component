import React, { CSSProperties } from 'react';
import '../../css/font.css'
import '../../css/Button.css';

type ButtonProps = {
  style?: CSSProperties
  text?: string;
  type?: string;
  isDisabled?: boolean;
  isVisible?: boolean;
  onClick?: (e: React.SyntheticEvent<EventTarget>) => void;
  isMobile?: boolean;
}

const Button = ({text, type, isDisabled, isVisible, onClick, style, isMobile}: ButtonProps) => {
  const _getClassName = () => {
    return [
      isMobile ? 'kuc-btn-mobile' : 'kuc-btn',
      type === 'submit' ? 'submit' : 'normal'
    ].join(' ').trim();
  };
  if (isVisible === false) {
    return null;
  }
  return (
    <button style={style} onClick={onClick} className={_getClassName()} disabled={isDisabled}>
      {text}
    </button>
  );
};

export default Button;