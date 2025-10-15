import { test, expect } from '@playwright/test';

test('Handle auto-suggest dropdown in Google', async ({ page }) => {
  await page.goto("http://10.17.17.46:2034/");

  const cookieModal = page.locator('#cookieConsentModal');
  if (await cookieModal.isVisible()) {
    await cookieModal.locator('button:has-text("Accept")').click();
  }

  // Type the search term
 // await page.getByRole ( 'combobox' , {name:'Search'}).fill('playwright');

  // Wait for suggestions to appear
  //const options = page.getByRole('option');
  //await expect(options.first()).toBeVisible();

   // await page.getByRole('button', {name:'submit'}).click();// button 

    await page.getByPlaceholder('UserID').fill('user6');
});
