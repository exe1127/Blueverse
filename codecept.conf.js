/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      device: 'emulator-5554',
      desiredCapabilities: {
        automationName: 'UiAutomator2',
        platformVersion: "12.0",
        appPackage: 'club.blueverse.develop',  // Package name of your app
        appActivity: 'club.blueverse.MainActivity', // App activity of the app
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'Blueverse'
}