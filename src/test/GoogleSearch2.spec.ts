import { test, expect, Page } from '@playwright/test';


//eany variable can be defined with let or const 
let page: Page

//create beforeALL function to define only one instance of the page
test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
})

//search for bmw 
test("Search for BMW on Search Field ", async() => {

    //navigate to google
    await page.goto("https://www.google.com")
    //wait few seconds
    await page.waitForTimeout(3000)
    //type bmw on your search field
    await page.locator("xpath=//*[@name='q']").fill("BMW")
    //click on google sarch button
    await page.locator("xpath=//*[@name='btnK']").nth(0).click()

}) //end of test 1

//capture search result
test("Capture Search Result Number for BMW", async() => {

    //wait a few seconds
    await page.waitForTimeout(3000)
    //store the search results text in variable
    let result = await page.locator("xpath=//*[@id='result-stats']")
    //type bmw on your search field
    await page.locator("xpath//*[@id='result-stats']").textContent()
    //capture the search number and print it out 
    let arrayResult = result?.split(" ")
    console.log("The BMW search number is" + arrayResult[1])
}) //end of test 2

