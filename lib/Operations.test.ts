import assert from "assert";
import { suma } from "./Operations";

describe('LocalConfigsManager test', () => {

  it("test suma", () => {
    const result = suma(1, 2);

    assert.equal(3, result);
  });
});
