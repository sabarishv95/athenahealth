export function getValue(data, key) {
  let totalAmount = 0;
  if (!data.length || !Array.isArray(data)) return totalAmount;
  data.forEach((datum) => {
    totalAmount += datum[key];
  });
  return totalAmount;
}
