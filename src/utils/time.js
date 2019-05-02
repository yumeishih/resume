export const formatMY = (timeString) => {
  if(!timeString) return 'PRESENT'
  const [year, month] = timeString.split('/')
  if(!month) {
    return year;
  }
  const date = new Date(year, month - 1);
  return date.toLocaleString('en-us', { year: 'numeric', month: 'short' });
}
