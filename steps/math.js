const { defineSupportCode } = require("cucumber");
const assert = require("assert");

defineSupportCode(function ({ Given, Then, When }) {
  let answer = 0;

  Given("I have a {int}", function (input) {
    answer = input;
  });
  When("I add {int}", function (input) {
    answer = answer + input;
  });
  Then("In total I have {int}", function (input) {
    assert.equal(answer, input);
  });
  When("I multiply by {int}", function (input) {
    answer = answer * input;
  });
});
