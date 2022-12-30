const axios = require("axios");

const { defineSupportCode } = require("cucumber");

defineSupportCode(function ({ Given, Then, When }) {
  let answer = 0;

  Given("I have this postal code {int}", function (input) {
    answer = input;
  });

  When("I whant some information about the postal code", function () {
    return axios
      .get(`https://apicarto.ign.fr/api/codes-postaux/communes/${answer}`)
      .then((res) => {
        return res;
      });
  });

  Then("The response body should be", function (dataTable) {
    return dataTable;
  });
});
