import {test, expect} from '@playwright/test';

test('login test', async ({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.locator("//input[@id='username']").fill('student');
    await page.locator("//input[@id='password']").fill('student');
    await page.click("//button[@id='submit']");

});