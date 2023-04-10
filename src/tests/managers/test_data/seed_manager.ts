export const seedManagerTestCaseData = [
  {
    test: "Seed @ 2.4 include stake in returns",
    truePrice: 2.4,
    spread: 4,
    steps: 4,
    backToWin: 100,
    layToLose: 100,
    includeStakeInReturns: true,
    depthStakePercentage: [100],
    forSeeds: [
      {
      stake: 40,
      price: 2.48
    }
  ],
    againstSeeds: [
      {
        stake: 43,
        price: 2.32
      }     
    ]
  },
  {
    test: "Seed @ 2.4 exclude stake from returns",
    truePrice: 2.4,
    spread: 4,
    steps: 4,
    backToWin: 100,
    layToLose: 100,
    includeStakeInReturns: false,
    depthStakePercentage: [100],
    forSeeds: [
      {
      stake: 67,
      price: 2.48
    }
  ],
    againstSeeds: [
      {
        stake: 75,
        price: 2.32
      }     
    ]
  }
];
