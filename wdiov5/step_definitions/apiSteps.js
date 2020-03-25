import { Given, When, Then } from "cucumber";
import { newUser1, newUser2, MAX_Code } from "../test-data/apiTestData";
const apiPoints = require("../config/endPoints");
let expectedResponse = null;

Given(
  "I make request to {string} with the endpoint {string}",
  (baseUrl, endPoint) => {
    browser.getUrl();
  }
);

Given(
  "I make {string} request to the {string} with the endpoint {string}",
  (requestType, baseUrl, endPoint) => {
    browser.getUrl();
  }
);

Given(
  "I make {string} request to the {string} with the endpoint {string} with JSON data",
  (requestType, baseUrl, endPoint) => {
    browser.getUrl();
  }
);

Then("I should see response status code {string}", statusCode => {
  browser.getUrl();
});
Then("I should see response body to have {string}", bodyCo => {
  browser.getUrl();
});

Then("I should see response body to have lenght of {string}", bodyLength => {
  browser.getUrl();
});

Then(
  "I should see response body to have property {string} and value {string}",
  (property, value) => {
    browser.getUrl();
  }
);
