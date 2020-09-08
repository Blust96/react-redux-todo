const actions = [
  'eat',
  'sleep',
  'sell',
  'buy',
  'destroy',
  'throw',
  'bury',
];

const objects = [
  'the banana',
  'the dog',
  'a fireman',
  'a dancing guy',
  'Station F',
  'the coffin',
];

export const getRandomDescription = () => {
  const randomAction = actions[Math.floor(Math.random() * actions.length)];
  const randomObject = objects[Math.floor(Math.random() * objects.length)];
  
  return `${randomAction} ${randomObject}`;
}
