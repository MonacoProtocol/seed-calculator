type StakeManagerOpts = {
  toReturn: number;
  toLose: number;
  includeStakeInReturns: boolean;
  depthStakePercentages: number[];
};

export class StakeManager {
  static initialize(
    toReturn: number,
    toLose: number,
    includeStakeInReturns: boolean,
    depthStakePercentages: number[]
  ): StakeManager {
    return new StakeManager({
      toReturn,
      toLose,
      includeStakeInReturns,
      depthStakePercentages
    });
  }

  toReturn: number;
  toLose: number;
  includeStakeInReturns: boolean;
  depthStakePercentages: number[];

  constructor(opts: StakeManagerOpts) {
    this.toReturn = opts.toReturn;
    this.toLose = opts.toLose;
    this.includeStakeInReturns = opts.includeStakeInReturns;
    this.depthStakePercentages = opts.depthStakePercentages;
  }

  get depthStakeDecimal(): number[] {
    return this.depthStakePercentages.map((stake) => {
      return stake / 100;
    });
  }

  private forStake(price: number): number {
    if (this.includeStakeInReturns) return this.toReturn / price;
    return this.toReturn / (price - 1);
  }

  private againstStake(price: number): number {
    if (this.includeStakeInReturns) return this.toLose / price;
    return this.toLose / (price - 1);
  }

  forStakes(prices: number[]): number[] {
    if (prices.length != this.depthStakeDecimal.length)
      throw new Error(
        `Prices and depth stake % mismatch: ${prices.length} prices | ${this.depthStakeDecimal.length} depth stake percentages`
      );
    return prices.map((price, i) => {
      const stake = this.forStake(price);
      return stake * this.depthStakeDecimal[i];
    });
  }

  againstStakes(prices: number[]): number[] {
    if (prices.length != this.depthStakeDecimal.length)
      throw new Error(
        `Prices and depth stake % mismatch: ${prices.length} prices | ${this.depthStakeDecimal.length} depth stake percentages`
      );
    return prices.map((price, i) => {
      const stake = this.againstStake(price);
      return stake * this.depthStakeDecimal[i];
    });
  }
}
