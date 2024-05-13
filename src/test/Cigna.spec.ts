import { test, expect, Page } from '@playwright/test';


//any variable can be defined with let or const
let page: Page

//create beforeALL function to define only one instance of the page
test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
})