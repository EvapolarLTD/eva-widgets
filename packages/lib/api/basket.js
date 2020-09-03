export const calculateItemsCount = (items) => {
  return items.reduce((count, item) => count + item.count, 0);
};
