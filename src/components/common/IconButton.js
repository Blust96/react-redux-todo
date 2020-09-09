import React from 'react';

import './IconButton.css';

const IconButton = props => {
  const { onClick, style, disabled = false } = props;

  return (
    <button onClick={onClick} className="icon-button" style={style} disabled={disabled}>
      { props.children }
    </button>
  )
}

export default IconButton;
