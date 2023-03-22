type StakeManagerOpts = {
  backToWin: number;
  layToLose: number;
  depthStakePercentage: number[];
};

export class StakeManager {
  static initialize(
    backToWin: number,
    layToLose: number,
    depthStakePercentage: number[]
  ): StakeManager {
    return new StakeManager({ backToWin, layToLose, depthStakePercentage });
  }

  backToWin: number;
  layToLose: number;
  depthStakePercentage: number[];

  constructor(opts: StakeManagerOpts) {
    this.backToWin = opts.backToWin;
    this.layToLose = opts.layToLose;
    this.depthStakePercentage = opts.depthStakePercentage;
  }

  get depthStakeDecimal() {
    return this.depthStakePercentage.map((stake) => {
      return stake / 100;
    });
  }

  private forStake(price: number): number {
    return this.backToWin / (price - 1);
  }

  private againstStake(price: number): number {
    return this.layToLose * price - this.layToLose;
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
