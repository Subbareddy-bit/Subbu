import { test ,expect } from '@playwright/test';

test('Multiselectiondrodown' , async({page})=> {

await page.goto("https://testautomationpractice.blogspot.com/");

// select multiple options from dropdown  using Array list 

//await page.locator('#colors', ['Yellow' ,'Red' ,'Bule']);

// using Asseration to check validation

const options = await page.locator('#colors option');
await expect(options).toHaveCount(7);

});








