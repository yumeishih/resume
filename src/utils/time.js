export const formatMY = (timeString) => {
  if(!timeString) return 'PRESENT'
  const date = new Date(timeString);
  return date.toLocaleString('en-us', { year: 'numeric', month: 'short' });
}
