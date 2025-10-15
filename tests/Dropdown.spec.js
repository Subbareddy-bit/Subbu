import { test, expect } from '@playwright/test';

test('Dropdown Test', async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/"); // ✅ Correct

  // Example: select a value from dropdown
  //await page.selectOption('#country', { label: 'India' });   lable and visble value
 // await page.locator("#country").selectOption({label:'India'});
  
   // await page.selectOption('#country', { value: 'india' });   // by value   
   //await page.selectOption('#country', {index:3});   // by index


   await page.selectOption('#country', [
    
    { value: 'usa' },

    { index: 2 } ,  // selects by position also

    { label: 'India' }
    
  ]);

  await page.waitForTimeout(5000);
});









