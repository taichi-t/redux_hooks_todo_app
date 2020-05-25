export const changeValuesOfObjArrays = (
  copy_sorce_array,
  target,
  pram,
  boolean
) => {
  for (let i = 0; i < copy_sorce_array.length; i++) {
    if (target.includes(copy_sorce_array[i].id)) {
      copy_sorce_array[i][pram] = boolean;
    }
  }
  return copy_sorce_array;
};
