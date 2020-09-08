import React, { useEffect, useState } from 'react';

import TodoInput from './TodoInput';
import { getRandomCatImage } from '../../api/meowApi';

const TodoBox = props => {
  const { dispatchUpdate, todo, isActive } = props;
  const { description, done, createdAt } = todo;

  const [catImageUrl, setCatImageUrl] = useState('');
  const [value, setValue] = useState(description);

  const submit = () => {
    dispatchUpdate(value);
    setValue('');
  }

  const setRandomCatImage = async () => {
    const catImageUrl = await getRandomCatImage();
    setCatImageUrl(catImageUrl);
  }

  useEffect(() => {
    setRandomCatImage();
  }, []);

  return isActive ? 
    (
      <div className="todo__box">
        <TodoInput submit={submit} setValue={setValue} value={value} />
        <img src={catImageUrl} alt="Un chat !"/>
      </div>
    )
    : null
}

export default TodoBox;
