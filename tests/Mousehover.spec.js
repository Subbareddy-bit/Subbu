import { test, expect } from '@playwright/test';

test('Mousehover', async({page})=> {

await page.goto("https://demo.opencart.com/");

const Desktopmac = await page.locator('//a[normalize-space()="PC (0)"]');
await Desktopmac.hover();  /// Mouse over

//const Desktopmac=await page.locator('//a[normalize-space()="Mac (1)"]');

//const menu = page.getByRole('link', { name: 'PC (0)' });
//await menu.hover();




// Wait until visible, then hover
//await expect(menu).toBeVisible({ timeout: 10000 });

//await menu.hover();

await page.waitForTimeout(5000);



});