import { test, expect } from '@playwright/test';

test('test', async ({ page },testInfo) => {
  await page.goto('https://www.demoblaze.com/');
  //await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByRole('link',{name:'Log in'}).click();
  
  await page.locator('#loginusername').fill('pavanol');
  
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  //await page.getByLabel('Log in').getByText('Close').click();
//////  only Homepage syntex
  await page.screenshot({path:'tests/Screensot'+Date.now()+'Homepage.png'})
//////Full page syntex
 //await page.screenshot({ path: 'tests/Screenshot'+Date.now()+'Fullpage.png', fullPage: true });
 const screenshot = await page.screenshot({ fullPage: true })
  await testInfo.attach('Screenshot', {
    body: screenshot,
    contentType: 'image/png',
  });
});