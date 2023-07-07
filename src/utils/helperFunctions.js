const formatDate = input => {
  const date = new Date(input);
  const formattedDate = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  return formattedDate;
};

export const helperFunctions = {
  formatDate,
};
