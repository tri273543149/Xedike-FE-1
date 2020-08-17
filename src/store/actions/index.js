export const createAction = (type, payload) => {
  return {
    type,
    payload,
  };
};

export const filterAction = (type, filterType, filterValue) => ({
  type,
  filterType,
  filterValue,
});
