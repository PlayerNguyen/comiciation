import { expect } from "chai";
import { PermissionGroupController } from "../controller/PermissionGroupController";
import { PermissionGroupDefault } from "../Permission";

describe("Should have permission group", () => {
  it("Should have permission groups on database", (done) => {
    Promise.all(
      PermissionGroupDefault.map((group) =>
        PermissionGroupController.hasPermissionGroup(group.name)
      )
    )
      .then((assertion) => {
        assertion.forEach((assert) => {
          expect(assert).to.be.true;
        });
      })
      .then(done, done)
      .catch(done);
  });
});
