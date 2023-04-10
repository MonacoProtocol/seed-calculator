import assert from "assert";
import { SeedManager } from "../../managers/seed_manager";
import { seedManagerTestCaseData } from "./test_data/seed_manager";

describe("Seed Manager", () => {
  it.each(seedManagerTestCaseData)("Calculates seeds for $test", (testData) => {
    const manager = SeedManager.initialize(
      testData.truePrice,
      testData.spread,
      testData.steps,
      testData.toReturn,
      testData.toLose,
      testData.includeStakeInReturns,
      testData.depthStakePercentage
    );
    assert.deepStrictEqual(manager.forSeeds, testData.forSeeds);
    assert.deepStrictEqual(manager.againstSeeds, testData.againstSeeds);
  });
});
