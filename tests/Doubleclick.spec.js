import { test, expect } from '@playwright/test';

test('Dropdown Test', async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/"); // ✅ Correct

  const doubleclick = await page.locator("//button[normalize-space()='Copy Text']");

  await doubleclick.dblclick();


  

  await page.waitForTimeout(5000);
});









