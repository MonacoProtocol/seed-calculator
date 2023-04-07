type StakeManagerOpts = {
  backToWin: number;
  layToLose: number;
  includeStakeInReturns: boolean;
  depthStakePercentages: number[];
};

export class StakeManager {
  static initialize(
    backToWin: number,
    layToLose: number,
    includeStakeInReturns: boolean,
    depthStakePercentages
: number[]
  ): StakeManager {
    return new StakeManager({ backToWin, layToLose, includeStakeInReturns, depthStakePercentages});
  }

  backToWin: number;
  layToLose: number;
  includeStakeInReturns: boolean;
  depthStakePercentages: number[];

  constructor(opts: StakeManagerOpts) {
    this.backToWin = opts.backToWin;
    this.layToLose = opts.layToLose;
    this.includeStakeInReturns = opts.includeStakeInReturns
    this.depthStakePercentages = opts.depthStakePercentages;
  }

  get depthStakeDecimal(): number[] {
    return this.depthStakePercentages.map((stake) => {
      return stake / 100;
    });
  }

  private forStake(price: number): number {
    if (this.includeStakeInReturns) return this.backToWin / (price);
    return this.backToWin / (price - 1);
  }

  private againstStake(price: number): number {
    if (this.includeStakeInReturns) return this.layToLose / (price);
    return this.layToLose / (price - 1);
  }

  forStakes(prices: number[]): number[] {
    if (prices.length != this.depthStakeDecimal.length)
      throw new Error(
        `Prices and depth stake % mismatch: ${prices.length} prices | ${this.depthStakeDecimal.length} depth stake percentages`
      );
    return prices.map((price, i) => {
      const stake = this.forStake(price);
      return Math.floor(stake * this.depthStakeDecimal[i]);
    });
  }

  againstStakes(prices: number[]): number[] {
    if (prices.length != this.depthStakeDecimal.length)
      throw new Error(
        `Prices and depth stake % mismatch: ${prices.length} prices | ${this.depthStakeDecimal.length} depth stake percentages`
      );
    return prices.map((price, i) => {
      const stake = this.againstStake(price);
      return Math.floor(stake * this.depthStakeDecimal[i]);
    });
  }
}
