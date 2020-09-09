import React from 'react';

import './Input.css';

const TodoInput = props => {
  const { submit, setValue, value } = props;

  const handleChange = e => {
    setValue(e.target.value);
  }

  const handleKeyDown = e => {
    if (e.keyCode === 13 && value !== '') {
      submit();
    }
  }
 
  return <input className="input" type='text' placeholder="ex: To meow" onKeyDown={handleKeyDown} onChange={handleChange} value={value} />
}

export default TodoInput;
