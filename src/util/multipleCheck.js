export const multipleCheck = (copy_sorce_array, target, boolean) => {
  for (let i = 0; i < copy_sorce_array.length; i++) {
    if (target.includes(copy_sorce_array[i].id)) {
      copy_sorce_array[i].check = boolean;
    }
  }
  return copy_sorce_array;
};
