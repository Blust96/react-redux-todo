import React from 'react';

import './Input.css';

const Input = props => {
  const { submit, setValue, value, placeholder, inputRef = null } = props;

  const handleChange = e => {
    setValue(e.target.value);
  }

  const handleKeyDown = e => {
    if (e.keyCode === 13 && value !== '') {
      submit();
    }
  }
 
  return <input className="input" type='text' placeholder={placeholder} onKeyDown={handleKeyDown} onChange={handleChange} value={value} ref={inputRef} />
}

export default Input;
