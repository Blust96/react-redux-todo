export const getFormattedDate = date => {
  const formattedDate = new Date(date);
  return `${formattedDate.toLocaleDateString()} - ${formattedDate.toLocaleTimeString()}`;
}