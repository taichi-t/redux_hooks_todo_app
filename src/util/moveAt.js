export const moveAt = (array, index, at) => {
  console.log(array, index, at);
  const value = array[index];
  const tail = array.slice(index + 1);

  array.splice(index);

  Array.prototype.push.apply(array, tail);

  array.splice(at, 0, value);

  return array;
};
