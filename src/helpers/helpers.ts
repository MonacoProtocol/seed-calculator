export function nItemsEitherSidePointInArray(
  startValue: any,
  depth: number,
  array: any[]
) {
  let startIndex = array.indexOf(startValue);
  if (startIndex < depth) throw new Error("Not enough items below start value");
  if (startIndex + depth >= array.length)
    throw new Error("Not enough items above start index");
  startIndex = Math.min(Math.max(0, startIndex), array.length - depth);
  return array.slice(startIndex - depth, startIndex + depth + 1);
}

export function nItemsDownArray(startValue: any, depth: number, array: any[]) {
  const startIndex = array.indexOf(startValue);
  return array.slice(startIndex - (depth - 1), startIndex + 1).reverse();
}

export function nItemsUpArray(startValue: any, depth: number, array: any[]) {
  const startIndex = array.indexOf(startValue);
  return array.slice(startIndex, startIndex + depth);
}

export function roundNumber(numberToRound: number, decimals: number = 2) {
  return parseFloat(numberToRound.toFixed(decimals));
}
