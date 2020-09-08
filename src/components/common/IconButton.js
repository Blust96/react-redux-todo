import React from 'react';

const IconButton = props => {
  const { onClick } = props;

  return (
    <button onClick={onClick}>
      { props.children }
    </button>
  )
}

export default IconButton;
