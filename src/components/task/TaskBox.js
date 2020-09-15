import React, { useEffect, useState } from 'react';
import { PencilFill } from 'react-bootstrap-icons';

import { IconButton, Input } from '../common';
import { getRandomCatImage } from '../../api/meowApi';
import spinner from '../../assets/spinner.gif';
import './TaskBox.css';

const TaskBox = props => {
  const { dispatchUpdate, task } = props;
  const { description } = task;

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

  return (
    <div className="task__box">
      <h3>Modifier la description :</h3>
      <div className="task__input">
        <Input submit={submit} setValue={setValue} value={value} />
        <IconButton onClick={submit} style={{ backgroundColor: 'white' }} disabled={value === ''} >
          <PencilFill size={20} />
        </IconButton>
      </div>
      { isLoading ? <img className="task__image" src={spinner} alt="Chargement en cours !"/> : <img className="task__image" src={catImageUrl} alt="Un chat !"/> }
    </div>
  )
}

export default TaskBox;
