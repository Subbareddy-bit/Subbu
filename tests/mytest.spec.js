import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://10.17.17.46:2034/');
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('textbox', { name: 'UserID' }).click();
  await page.getByRole('textbox', { name: 'UserID' }).fill('user6');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@123');
  await page.getByRole('button', { name: ' LOG IN' }).click();
});