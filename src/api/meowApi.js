const API_BASE_URL = 'https://aws.random.cat/meow';

export const getRandomCatImage = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    const data = await response.json();
    const catImageUrl = data.file;

    return catImageUrl;
  } catch (error) {
    console.log(error);
  }
}