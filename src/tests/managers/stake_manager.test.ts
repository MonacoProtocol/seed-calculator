import assert from "assert";
import { StakeManager } from "../../managers/stake_manager";
import { stakeManagerTestCaseData } from "./test_data/stake_manager";

describe("Stake Manager", () => {
  it("Converts percentages to decimal", () => {
    const manager = StakeManager.initialize(300, 100, false, [100, 75, 50]);
    assert.deepStrictEqual(manager.depthStakeDecimal, [1, 0.75, 0.5]);
  });

  it.each(stakeManagerTestCaseData)(
    "Calculates stakes for $test",
    (testData) => {
      const manager = StakeManager.initialize(
        testData.toReturn,
        testData.toLose,
        testData.includeStakeInReturns,
        testData.depthStakePercentage
      );
      assert.deepStrictEqual(
        manager.forStakes(testData.forPrices),
        testData.forStakes
      );
      assert.deepStrictEqual(
        manager.againstStakes(testData.againstPrices),
        testData.againstStakes
      );
    }
  );
});
