const {test, expect} = require('@playwright/test')

test('Launch Browser and Navigate URL Test', async({page})=>{
    await page.goto('http://localhost/login.do')

    const url=await page.url();
    console.log("URL of Application :"+url);

    await expect(page).toHaveURL('http://localhost/login.do')
    
    const title = await page.title();
    console.log("Title of the Application "+title);
    await expect(page).toHaveTitle('actiTIME - Login')
    
})