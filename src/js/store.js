export const getList = () => {
  let books;
  if (localStorage.getItem('List') === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('List'));
  }

  return books;
};
