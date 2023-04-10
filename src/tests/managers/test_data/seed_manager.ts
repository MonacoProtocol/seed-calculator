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
        stake: 40.32,
        price: 2.48,
        return: 100
      }
    ],
    againstSeeds: [
      {
        stake: 43.1,
        price: 2.32,
        return: 100
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
        stake: 67.57,
        price: 2.48,
        return: 167.57
      }
    ],
    againstSeeds: [
      {
        stake: 75.76,
        price: 2.32,
        return: 175.76
      }
    ]
  },
  {
    test: "Seed @ 3.4  - depth of 3 -  include stake in returns",
    truePrice: 3.4,
    spread: 4,
    steps: 4,
    backToWin: 100,
    layToLose: 100,
    includeStakeInReturns: true,
    depthStakePercentage: [100, 75, 50],
    forSeeds: [
      {
        stake: 27.78,
        price: 3.6,
        return: 100
      },
      {
        stake: 19.48,
        price: 3.85,
        return: 75
      },
      {
        stake: 11.9,
        price: 4.2,
        return: 50
      }
    ],
    againstSeeds: [
      {
        stake: 31.25,
        price: 3.2,
        return: 100
      },
      {
        stake: 25.17,
        price: 2.98,
        return: 75
      },
      {
        stake: 17.36,
        price: 2.88,
        return: 50
      }
    ]
  },
  {
    test: "Seed @ 3.4 - depth of 3 - exclude stake from returns",
    truePrice: 3.4,
    spread: 4,
    steps: 4,
    backToWin: 100,
    layToLose: 100,
    includeStakeInReturns: false,
    depthStakePercentage: [100, 75, 50],
    forSeeds: [
      {
        stake: 38.46,
        price: 3.6,
        return: 138.46
      },
      {
        stake: 26.32,
        price: 3.85,
        return: 101.32
      },
      {
        stake: 15.63,
        price: 4.2,
        return: 65.63
      }
    ],
    againstSeeds: [
      {
        stake: 45.45,
        price: 3.2,
        return: 145.45
      },
      {
        stake: 37.88,
        price: 2.98,
        return: 112.88
      },
      {
        stake: 26.6,
        price: 2.88,
        return: 76.6
      }
    ]
  }
];
