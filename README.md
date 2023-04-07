# Seed Calculator

When applying liquidity to a market on The Monaco Protocol, market makers need to apply a spread of prices (odds) with set stake and risk amounts in order to avoid unmanageable liabilities.

The seed calculator takes in seeding parameters in order to generate for (back) and against (lay) prices with their relevant stake amounts in order to apply an even spread of liquidity.

# Parameters

- **True Price**
  - The the mid-point on a market between _for_ and _against_ orders, all prices are calculated from this point on the price ladder.
- **Spread**
  - The first price on either side of the ladder from the true price.
- **Steps**
  - How many rungs up or down the ladder until the next price is determined.
- **Price Tolerance**
  - How many rungs up and down the ladder the current price on the market can deviate before you would want to reconfigure the true price for seeding.
- **Back To Win**
  - Amount to be returned from your for (back) order
- **Lay To Lose**
  - Amount to be returned from your against (lay) order
- **Include Stake in Returns** (true/false)
  - Whether or not to include the stake/risk in the return calculations
- **Depth Percentages**
  - Percentage of stake
- **Price Ladder**
  - The calculator provides prices based on the default Monaco Protocol price ladder, but custom price ladders can be provided.

# Example

![](media/images/seed_example.png)