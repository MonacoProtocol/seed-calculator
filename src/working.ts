import { PriceManager } from "./managers/price_manager"
import { StakeManager } from "./managers/stake_manager"

type SeedManagerOpts = {
    priceManager: PriceManager
    stakeManager: StakeManager
}
export class SeedManager {
    static initialize(
        truePrice: number,
        spread: number,
        steps: number,
        priceTolerance: number,
        backToWin: number,
        layToLose: number,
        depthStakePercentage: number[]
    ){
        const priceManager = PriceManager.initialize(truePrice, spread, depthStakePercentage.length, steps, priceTolerance)
        const stakeManager = StakeManager.initialize(backToWin, layToLose, depthStakePercentage)
        return new SeedManager({priceManager, stakeManager})
    }

    private priceManager: PriceManager
    private stakeManager: StakeManager

    constructor(opts: SeedManagerOpts){
        this.priceManager = opts.priceManager
        this.stakeManager = opts.stakeManager
    }

    get forSeeds(){
        return this.priceManager.forPrices.map((price, i) => {
            const stakes = this.stakeManager.forStakes(this.priceManager.forPrices)
            return {
                price: price,
                stake: stakes[i]
            }
        })
    }

    get againstSeeds(){
        return this.priceManager.againstPrices.map((price, i) => {
                const stakes = this.stakeManager.againstStakes(this.priceManager.againstPrices)
                return {
                    price: price,
                    stake: stakes[i]
                }
            })
    }

    checkForTolerance(actualPrice: number){
        return this.priceManager.forPriceWithinTolerance(actualPrice)
    }

    checkAgainstTolerance(actualPrice: number){
        return this.priceManager.againstPriceWithinTolerance(actualPrice)
    }
}

const seeder = SeedManager.initialize(2, 2, 3, 5, 100, 100, [100, 75, 50, 25])
console.log(seeder.forSeeds)
console.log(seeder.againstSeeds)