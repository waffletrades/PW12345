import { test, expect, Page } from '@playwright/test';

test ("Shop for new invetory", async({page}) => {


//set time limit for exlicit wait 
let timeLimit = 6000

//navigate to nissan homepage
await page.goto("https://www.nissanusa.com/")
//click on vehicles 
await page.locator("xpath=//*[@class='c_320B-menu-link']").nth(0).click()
//click on all vehicles 
await page.locator("xpath=//*[@class='c_321B-1']").nth(0).click()
//hover over future and concept vehicles 
await page.locator("xpath=//*[@class='usg-btn usg-btn--primary-inverted usg-btn--fill-small track-c258-cta']").hover()
//click on the future and concept vehciles 
await page.locator("xpath=//*[@class='usg-btn usg-btn--primary-inverted usg-btn--fill-small track-c258-cta']").click()
//hover over Bold Design picture 
await page.locator("xpath=//*[@class='c_mosaic_layout_tile_content']").nth(0).hover()
//click on the Bold Design picture
await page.locator("xpath=//*[@class='c_mosaic_layout_tile_content']").nth(0).click()
//click on next Button 6 times
for(let i = 0; i < 6; i++){

    await page.locator("xpath=//*[@class='slick-next']").click()
    await page.waitForTimeout(500)

}//end of for loop

//click on close
await page.locator("xpath=//*[@class='c_273_close_label']").click()
//click on build and price 
await page.locator("xpath=//*[@data-di-id='di-id-74299ef2-4fdaf022']").click()



}//end of test loop


)//end of test