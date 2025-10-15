import {test , expect} from '@playwright/test';

test('Hiddendropdown', async({page})=> {


    


  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Leave' }).click();

  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('t');
  await page.getByRole('option', {name:'Test User 1'}).locator('span').click();

  
  

 
});















