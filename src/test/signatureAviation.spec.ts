import { test, expect, Page } from '@playwright/test'
import { captureText, clickByIndex, keyboardEnter, navigate, sendKeys } from '../main/elementActions'
import {allure} from "allure-playwright"
import { Context } from 'vm';

let page: Page

//Setting the browser context and initializing page
test.beforeAll(async ( { browser } ) => {
    page = await browser.newPage()
    
})

//close the browser after all test
test.afterAll(async ({ }, testInfo) => {
    await page.close()    
})
test('System test example', async () => {

//navigate to signature aviation page
await page.goto("https://www.signatureaviation.com/")
//type in search field
await sendKeys(page,"xpath=//*[@id='where-to-next-searchbox-fbos']","Orlando","Search Field",)
//click search
await clickByIndex(page, "xpath=//*[@class='btn-primary-blue  search-button']",0,"Search button")
//click first fbo location
await clickByIndex(page, "xpath=//*[@class='card']",0,"First fbo location")
//click view fbo
await clickByIndex(page, "xpath=//*[@class='btn-primary-white']",1,"View fbo button")
//wait few seconds
await page.waitForTimeout(3000)
//click view retail price
await clickByIndex(page, "xpath=//*[@class='manager-contact btn-bar']",0,"View Retail price button")
//wait few seconds
await page.waitForTimeout(2000)
//exit out of retail price popup
await clickByIndex(page, "xpath=//*[@class='closeBtn']",0,"Exit out")
//click Services tab
await clickByIndex(page, "xpath=//*[@class='menu-link cmp-navigation__item-link ']",12,"Services tab")
//click SAF
await clickByIndex(page, "xpath=//*[@class='menu-link cmp-navigation__item-link ']",13,"Sustainable Aviation Fuel tab")
//click on SAF
await clickByIndex(page, "xpath=//*[@class='navigationbar-menu']",0,"SAF information link")
//capture information on SAF and print 
let result = await captureText(page,"xpath=//*[@id='salfuel']","SAF information")
console.log(result)
await allure.logStep(result)

})