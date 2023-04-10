export const priceManagerTestCaseData = [
  {
    test: "#1",
    truePrice: 2,
    spread: 3,
    depth: 3,
    steps: 2,
    forPrices: [2.03, 2.06, 2.09],
    againstPrices: [1.97, 1.94, 1.91],
    priceTolerance: 1,
    toleratedForPrices: [2.04, 2.03, 2.02],
    toleratedAgainstPrices: [1.98, 1.97, 1.96],
    nonToleratedForPrices: [2.01, 2.05],
    nonToleratedAgainstPrices: [1.99, 1.95]
  },
  {
    test: "#2",
    truePrice: 100,
    spread: 5,
    depth: 2,
    steps: 5,
    forPrices: [150, 210],
    againstPrices: [75, 48],
    priceTolerance: 2
  }
];
