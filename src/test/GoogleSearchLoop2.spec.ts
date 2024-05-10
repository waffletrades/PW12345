import { test, expect, Page } from '@playwright/test'

//set your ArrayList for cars 
let cars = Array<string>()
cars.push("BMW")
cars.push("Nissian")
cars.push("Lexus")

test("Search for multiple cars in Google Search", async({page}) => {


//set timelimit for explicit wait
let timeLimit= 6000

for(let i=0; i<cars.length; i++){


//navigate to google home
await page.goto("https://www.google.com")
//search for cars 
await page.locator("xpath=//*[@name='q']").fill(cars[i], {timeout:timeLimit})
//click on google search button 
await page.locator("xpath=//*[@name='btnK']").textContent({timeout:timeLimit})


//capture search result 
let result = await page.locator("xpath=//*[@id='result-stats']").textContent({timeout:timeLimit})
//split the result to only print the number of cars
let arrayResult = result?.split(" ")
console.log("For car " + cars[i] + "the search number is " + arrayResult[1])

}//end of loop

})//end of test 