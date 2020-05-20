export const checkHistory = (object) => {
  const result = object.some((item) => {
    return item.check === true;
  });
  return result;
};
