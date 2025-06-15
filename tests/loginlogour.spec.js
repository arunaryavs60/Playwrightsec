const {test, expect} = require('@playwright/test')
 
test('Login and Logout Test Script', async({page})=>{
    await page.goto("http://localhost/login.do")
    await page.waitForTimeout(4000)
 
    //Login Action
    await page.locator("//input[@id='username']").fill("admin")
    await page.locator("//input[@placeholder='Password']").fill("manager")
    await page.locator("a[id='loginButton'] div").click()
    await page.waitForTimeout(4000)

    // logout

    //Logout Action
    await page.locator("#gettingStartedShortcutsPanelId").click()
    await page.locator("//a[@id='logoutLink']").click()
    await page.waitForTimeout(4000)
 
})