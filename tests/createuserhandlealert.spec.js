const{test,expect}=require('@playwright/test')
test('Create User Scenario', async({page}) =>{
    await page.goto('http://localhost/login.do')
    await expect(page).toHaveURL('http://localhost/login.do')
    await expect(page).toHaveTitle('actiTIME - Login')

    await page.locator("//input[@id='username']").fill('admin')
    await page.locator("//input[@placeholder='Password']").fill('manager')
    await page.locator("a[id='loginButton'] div").click

    // create user steps

    await page.locator("#gettingStartedShortcutsPanelId").click()
    await page.locator("//*[@id='topnav']/tbody/tr[1]/td[5]/a/div[2]").click()
    await page.locator("//div[@class='buttonText']").click()
    await page.locator("#userDataLightBox_firstNameField").fill('demo')
    await page.locator("#userDataLightBox_lastNameField").fill("User1")
    await page.locator("#userdatalightbox_emailfield").fill('demo@gss.com')
    await page.locator("#userDataLightBox_usernameField").fill('demoUser1')
    await page.locator("#userDataLightBox_passwordField").fill('welcome1')
    await page.locator("#userDataLightBox_passwordCopyField").fill('welcome1')
    await page.locator("//span[normalize-space()='Create User']").click()

})