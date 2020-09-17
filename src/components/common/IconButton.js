import React from 'react';

import './IconButton.css';

const IconButton = props => {
  const { onClick, style, disabled = false } = props;

  const handleClick = e => {
    e.stopPropagation();
    onClick();
  }

  return (
    <button onClick={handleClick} className="icon-button" style={style} disabled={disabled}>
      { props.children }
    </button>
  )
}

export default IconButton;
