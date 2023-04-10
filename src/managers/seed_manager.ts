import { DEFAULT_PRICE_LADDER, PriceManager } from "./price_manager";
import { StakeManager } from "./stake_manager";

type SeedManagerOpts = {
  priceManager: PriceManager;
  stakeManager: StakeManager;
};

type Seed = {
  stake: number;
  price: number;
};

export type Seeds = Seed[];

export class SeedManager {
  static initialize(
    truePrice: number,
    spread: number,
    steps: number,
    backToWin: number,
    layToLose: number,
    includeStakeInReturns: boolean,
    depthStakePercentage: number[],
    priceLadder: number[] = DEFAULT_PRICE_LADDER,
    priceTolerance: number = null
  ) {
    if (!priceTolerance) priceTolerance = steps
    const priceManager = PriceManager.initialize(
      truePrice,
      spread,
      depthStakePercentage.length,
      steps,
      priceTolerance,
      priceLadder
    );
    const stakeManager = StakeManager.initialize(
      backToWin,
      layToLose,
      includeStakeInReturns,
      depthStakePercentage
    );
    return new SeedManager({ priceManager, stakeManager });
  }

  private priceManager: PriceManager;
  private stakeManager: StakeManager;

  constructor(opts: SeedManagerOpts) {
    this.priceManager = opts.priceManager;
    this.stakeManager = opts.stakeManager;
  }

  get forSeeds(): Seeds {
    return this.priceManager.forPrices.map((price, i) => {
      const stakes = this.stakeManager.forStakes(this.priceManager.forPrices);
      return {
        stake: stakes[i],
        price: price
      };
    });
  }

  get againstSeeds(): Seeds {
    return this.priceManager.againstPrices.map((price, i) => {
      const stakes = this.stakeManager.againstStakes(
        this.priceManager.againstPrices
      );
      return {
        stake: stakes[i],
        price: price,
      };
    });
  }

  checkForTolerance(actualPrice: number): boolean {
    return this.priceManager.forPriceWithinTolerance(actualPrice);
  }

  checkAgainstTolerance(actualPrice: number): boolean {
    return this.priceManager.againstPriceWithinTolerance(actualPrice);
  }
}
