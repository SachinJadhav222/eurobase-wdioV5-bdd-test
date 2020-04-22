exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || "BROWSERSTACK_USERNAME",
  key: process.env.BROWSERSTACK_ACCESS_KEY || "BROWSERSTACK_ACC_KEY",

  updateJob: false,
  specs: ["./wdiov5/features/**/*.feature"],
  exclude: [],

  capabilities: [
    {
      browser: "Chrome",
      name: "single_test",
      build: "eurobase-wdioV5-bdd-test",
      project: "eurobase-wdioV5-bdd-test"
    },
  ],

  logLevel: "warn",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  host: "hub.browserstack.com",

  // before: function () {
  //   var chai = require('chai');
  //   global.expect = chai.expect;
  //   chai.Should();
  // },

  framework: "cucumber",
  reporters: [
    [
      "json",
      {
        outputDir: "./wdiov5/reports/JSON",
        outputFileFormat: function (opts) {
          return `results-${opts.cid}.json`;
        },
      },
    ],
  ],

  cucumberOpts: {
    // <boolean> show full backtrace for errors
    backtrace: false,
    // <string[]> module used for processing required features
    requireModule: ["@babel/register"],
    // <boolean< Treat ambiguous definitions as errors
    failAmbiguousDefinitions: true,
    // <boolean> invoke formatters without executing steps
    // dryRun: false,
    // <boolean> abort the run on first failure
    failFast: false,
    // <boolean> Enable this config to treat undefined definitions as
    // warnings
    ignoreUndefinedDefinitions: false,
    // <string[]> ("extension:module") require files with the given
    // EXTENSION after requiring MODULE (repeatable)
    name: [],
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source uris
    source: true,
    // <string[]> (name) specify the profile to use
    profile: [],
    // <string[]> (file/dir) require files before executing features
    //requireModule: ["@babel/register"],

    require: [
      //"./wdiov5/support/common.js",
      "./wdiov5/step_definitions/*.js",
      // Or search a (sub)folder for JS files with a wildcard
      // works since version 1.1 of the wdio-cucumber-framework
      // './src/**/*.js',
    ],
    // <string> specify a custom snippet syntax
    snippetSyntax: undefined,
    // <boolean> fail if there are any undefined or pending steps
    strict: true,
    // <string> (expression) only execute the features or scenarios with
    // tags matching the expression, see
    // https://docs.cucumber.io/tag-expressions/
    tagExpression: "not @Pending",
    // <boolean> add cucumber tags to feature or scenario name
    tagsInTitle: false,
    // <number> timeout for step definitions
    timeout: 20000,
    format: "json",
  },
};
