import React from 'react';
import { mdiPlus, mdiMinus, mdiClose, mdiFile, mdiChevronRight, mdiChevronLeft } from '@mdi/js'

import iconButtonStyle from '../../style/IconButton'
import injectStyle from '../utils/injectStyle'

// inject style, call for each style object
injectStyle(iconButtonStyle)

type IconButtonProps = {
  type?: string;
  size?: string;
  color?: string;
  isDisabled?: boolean;
  isVisible?: boolean;
  shape?: string;
  onClick?: (e: React.SyntheticEvent<EventTarget>) => void
}

const IconButton = ({type, size, color = '', isDisabled, isVisible, shape, onClick}: IconButtonProps) => {
  const _getClassName = () => {
    const colors = ['gray', 'blue', 'red', 'green', 'transparent'];
    const colorResult = colors.indexOf(color) === -1 ? 'gray' : color;
    const shapeResult = shape === 'normal' ? 'normal' : 'circle';
    const className = [
      'kuc-icon-btn',
      _getClassSize(),
      type === 'remove' && colorResult === 'gray' ? 'hover-danger' : '',
      colorResult,
      shapeResult
    ];
    return className.join(' ').trim()
  }

  const _getIconData = () => {
    let iconData = mdiPlus;
    switch (type) {
      case 'insert':
        break
      case 'remove':
        iconData = mdiMinus
        break
      case 'close':
        iconData = mdiClose
        break
      case 'file':
        iconData = mdiFile
        break
      case 'right':
        iconData = mdiChevronRight
        break;
      case 'left':
        iconData = mdiChevronLeft
        break
    }
    return iconData
  }

  const _getClassSize = () => {
    const className = size === 'small' ? 'small' : 'large'
    return className
  };
  if (isVisible === false) {
    return null;
  }
  return (
    <button className={_getClassName()} onClick={onClick} disabled={isDisabled} >
      <svg>
        <path d={_getIconData()}/>
      </svg>
    </button>
  );
};

export default IconButton