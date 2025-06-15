const {test, expect} = require('@playwright/test')

test('user login', async ({page})=>{
    await page.goto('http://localhost/login.do')
    await expect(page).toHaveURL('http://localhost/login.do')

    await page.locator("//input[@id='username']").fill('admin')
    await page.locator("input[placeholder='Password']").fill('manager')
    await page.locator("a[id='loginButton'] div").click()

    const errorcontent=await page.locator("td[valign='top'] span[class='errormsg']").textContent()
    console.log("Error Message :"+errorcontent);
    //expect(errorcontent.includes('Please try again')).toBeTruthy()
    
   // expect(errorcontent ==='Username or Password is invalid. Please try again.').toBeTruthy()

})
