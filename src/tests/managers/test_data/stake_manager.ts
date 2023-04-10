export const stakeManagerTestCaseData = [
  {
    test: "100 @ 2 - include returns",
    toReturn: 100,
    toLose: 100,
    includeStakeInReturns: true,
    depthStakePercentage: [100],
    forPrices: [2.0],
    forStakes: [50],
    againstPrices: [2.0],
    againstStakes: [50]
  },
  {
    test: "100 @ 2 - exclude returns",
    toReturn: 100,
    toLose: 100,
    includeStakeInReturns: false,
    depthStakePercentage: [100],
    forPrices: [2.0],
    forStakes: [100],
    againstPrices: [2.0],
    againstStakes: [100]
  },
  {
    test: "100 @ 2 - 3 depths",
    toReturn: 100,
    toLose: 100,
    includeStakeInReturns: false,
    depthStakePercentage: [100, 50, 25],
    forPrices: [2.0, 2.0, 2.0],
    forStakes: [100, 50, 25],
    againstPrices: [2.0, 2.0, 2.0],
    againstStakes: [100, 50, 25]
  }
];
