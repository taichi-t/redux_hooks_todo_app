export const sortByDate = (array, callback) => {
  let Obj = {};
  let ObjArr = [];

  for (let k = 0; k < array.length; k++) {
    if (array[k].finishedAt in Obj !== true) ObjArr = [];
    ObjArr.push(array[k]);
    Obj[array[k].finishedAt] = ObjArr;
  }

  return Obj;
};
