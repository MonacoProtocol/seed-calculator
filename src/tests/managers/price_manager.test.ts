import assert from "assert";
import { PriceManager } from "../../managers/price_manager";
import { priceManagerTestCaseData } from "./test_data/price_manager";

describe("Price Manager", () => {
  const defaultTestData = priceManagerTestCaseData[0];
  const invalidPrice = -1;

  it.each(priceManagerTestCaseData)(
    "Returns valid prices for $test",
    (testData) => {
      const manager = PriceManager.initialize(
        testData.truePrice,
        testData.spread,
        testData.depth,
        testData.steps,
        testData.priceTolerance
      );
      const forPrices = manager.forPrices;
      const againstPrices = manager.againstPrices;
      assert.deepStrictEqual(forPrices, testData.forPrices);
      assert.deepStrictEqual(againstPrices, testData.againstPrices);
    }
  );

  it("Calculates price tolerance", () => {
    const manager = PriceManager.initialize(
      defaultTestData.truePrice,
      defaultTestData.spread,
      defaultTestData.depth,
      defaultTestData.steps,
      defaultTestData.priceTolerance
    );

    defaultTestData.toleratedForPrices.map((price) => {
      assert.deepStrictEqual(manager.forPriceWithinTolerance(price), true);
    });
    defaultTestData.toleratedAgainstPrices.map((price) => {
      assert.deepStrictEqual(manager.againstPriceWithinTolerance(price), true);
    });

    defaultTestData.nonToleratedForPrices.map((price) => {
      assert.deepStrictEqual(manager.forPriceWithinTolerance(price), false);
    });
    defaultTestData.nonToleratedAgainstPrices.map((price) => {
      assert.deepStrictEqual(manager.againstPriceWithinTolerance(price), false);
    });
  });

  it("Validates price on initialize", () => {
    expect(() => {
      PriceManager.initialize(invalidPrice, 3, 3, 3, 5);
    }).toThrow(`Price ${invalidPrice} not found in ladder`);
  });
});
