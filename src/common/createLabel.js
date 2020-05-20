export const createLabel = (array, callback) => {
  var Obj = {};
  var ObjArr = [];

  for (var k = 0; k < array.length; k++) {
    if (array[k].finishedAt in Obj !== true) ObjArr = [];
    ObjArr.push(array[k]);
    Obj[array[k].finishedAt] = ObjArr;
  }
  return Obj;
};
