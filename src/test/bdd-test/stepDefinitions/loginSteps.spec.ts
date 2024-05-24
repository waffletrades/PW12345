import { Given, When, Then } from '@cucumber/cucumber';
import { test, expect, Page } from '@playwright/test';



//any variable can be defined with let or const
let page: Page

//Setting the browser context and initializing page
 test.beforeAll(async ( { browser } ) => {
    page = await browser.newPage()
})

//close the browser after all test
test.afterAll(async ({ }, testInfo) => {
    await page.close()    
})


Given('I am on the login page',  async () => {
    //navigate to saucedemo
    await page.goto("//www.saucedemo.com/")
  });
  
  When('I enter valid Username {string} in text field', async (username: string) => {
    // Enter the username into the text field 
    await page.locator("xpath=//*[@id='user-name']").fill(username)
  });
  
  When('I enter valid password in text field', async () => {
    // Enter the password into the text field using Playwright
    await page.locator("xpath=//*[@id='password']").fill("secret_sauce")
  });
  
  When('click on the login button', async () => {
    // Click on the login button using Playwright
    await page.locator("xpath=//*[@id='login-button']").click()
  });
  
  Then('I should be taken to the Inventory page', async () => {
    // Verify that the user is taken to the Inventory page using Playwright
    await expect(page).toHaveTitle("Products")    
});
  
