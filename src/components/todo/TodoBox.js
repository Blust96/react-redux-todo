import React, { useEffect, useState } from 'react';
import { PencilFill } from 'react-bootstrap-icons';

import { IconButton, Input } from '../common';
import { getRandomCatImage } from '../../api/meowApi';
import './TodoBox.css';

const TodoBox = props => {
  const { dispatchUpdate, todo, isActive } = props;
  const { description, done } = todo;

  const [isLoading, setIsLoading] = useState(true);
  const [catImageUrl, setCatImageUrl] = useState('');
  const [value, setValue] = useState(description);

  const submit = () => {
    if (value !== description) {
      dispatchUpdate(value);
    }
  }

  const setRandomCatImage = async () => {
    const catImageUrl = await getRandomCatImage();
    setCatImageUrl(catImageUrl);
    setIsLoading(false);
  }

  useEffect(() => {
    setRandomCatImage();
  }, []);

  return isActive && !isLoading ? 
    (
      <div className="todo__box">
        <h3>Modifier la description :</h3>
        <div className="todo__input">
          <Input submit={submit} setValue={setValue} value={value} />
          <IconButton onClick={submit} style={{ backgroundColor: 'white' }} disabled={value === ''} >
            <PencilFill size={20} />
          </IconButton>
        </div>
        <img className="todo__image" src={catImageUrl} alt="Un chat !"/>
      </div>
    )
    : null
}

export default TodoBox;
