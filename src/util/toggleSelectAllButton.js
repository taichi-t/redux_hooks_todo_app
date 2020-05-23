export const toggleSelectAllButton = (
  object,
  setToggleButton,
  setIsActiveSellectAll,
  param
) => {
  const indicatorWithSellectAllButton = object.find(
    (item) => item[param] === false
  );

  if (object.length === 0 && indicatorWithSellectAllButton === undefined) {
    setIsActiveSellectAll(true); //selectAllButton disable
    setToggleButton(false); //selectAllButton on
  }
  if (object.length !== 0 && indicatorWithSellectAllButton !== undefined) {
    setToggleButton(false); //selectAllButton on
    setIsActiveSellectAll(false); //selectAllButton active
  }
  if (object.length !== 0 && indicatorWithSellectAllButton === undefined) {
    setIsActiveSellectAll(true); //selectAllButton disable
    setToggleButton(true); //uncheckButton on
  } else;
};
