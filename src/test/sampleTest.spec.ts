import { test, expect, Page } from '@playwright/test'
import * as elementActions from '../main/elementActions'
import {allure} from "allure-playwright"
import { Context } from 'vm';

//declare a variable to hold the page object
let page : Page

//Setting the browser context and initializing page
test.beforeAll(async ( { browser } ) => {
    //create a new page instance before all test
    page = await browser.newPage() 
})

//close the browser after all test
test.afterAll(async ({ }, testInfo) => {
    await page.close()    
})

//set ArrayList for cities
let cities = Array<string>()
cities.push("New York")
cities.push("Orlando")
cities.push("New Jersey")
cities.push("Mesa")

test('search for multiple cities', async ({page}) => {

    for(let i=0; i<cities.length; i++){

//navigate to siganture aviation page
await elementActions.navigate(page,"https://www.signatureaviation.com/" )
//type cities into search field 
await elementActions.sendKeys(page, "xpath=//*[@id='where-to-next-searchbox-fbos']",cities[i],"Search Field")
//use keyboard enter
await elementActions.keyboardEnter(page)
//select the second option on the dropdown
await elementActions.selectByValue(page,"xpath=//*[@name='distance-input']", "100" , "distanceDropdown")
//click on search 
await elementActions.clickElement(page, "xpath=//*[@class='btn-primary-blue  search-button']", "searchButton")
//capture text
await elementActions.captureText(page, "xpath=//*[@class='search-destination']", "searchDestinationText")
//verify map slider is present 
await elementActions.verifyElementPresent(page, "xpath=//*[@class='slider round']", "mapSlider")
    }//end of the loop
    await page.close(); // Close the page instance after completing the test
})