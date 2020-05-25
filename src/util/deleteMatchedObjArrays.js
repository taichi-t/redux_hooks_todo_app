export const deleteMatchedObjArrays = (copy_sorce_array, target) => {
  for (let i = 0; i < copy_sorce_array.length; i++) {
    if (target.includes(copy_sorce_array[i].id)) {
      copy_sorce_array.splice(i--, 1);
    }
  }
  return copy_sorce_array;
};
