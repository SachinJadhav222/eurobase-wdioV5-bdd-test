import { Given, When, Then } from 'cucumber';
//import {locators} from '../support/locators'
const locators= require('../support/locator').locators
const urls=require('../config/urls');

Given('I visit {string}', URL => {
	browser.url(urls[URL])
})

Then('I entered {string} at {string}', (expectedValue, selector) => {
	console.log('Platform=============>>>>>>>>>>>>>',process.platform)
	browser.$(locators[selector]).setValue(expectedValue);
	
})
Then('I click on {string}', selector => {
	browser.$(locators[selector]).click();
})

Then('I shloud see home page', () => {
	browser.getTitle();
})

Then('I should see {string} at {string}', (expectedValue, selector) => {
	browser.$(locators[selector]).getText().equals(expectedValue);
	
})

Then('I should see page title {string}',(expectedValue)=>{
   browser.getTitle().equals(expectedValue);
})

Then('I scrolled to {string}',(selector)=>{
browser.$(locators[selector]).scrollIntoView();
})

Then('I select {string} from dropdown at {string}',(expedtedValue,selector)=>{
  browser.getTitle();
})

Given('I log in to the web',()=>{
browser.url('http://zero.webappsecurity.com/login.html')
})

Then ('I should see home page',()=>{
//browser.getElementText('//h3[contains(text(),"Log in to ZeroBank")]')
console.log("This is URL =======>>>>",browser.getUrl())
//browser.isElementDisplayed('//h3[contains(text(),"Log in to ZeroBank")]')
})

