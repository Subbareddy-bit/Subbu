import {test , expect} from '@playwright/test';
import path from 'path';
import fs from 'fs';

test('Verfi if user is able to uploadfiles or not',async({page})=>{

    await page.goto("http://10.17.17.58:2034/Accounts/Login?acttype=sessiontimeout");
// Step 2: Handle Cookie modal if visible
  const cookieModal = page.locator('#cookieConsentModal');
  if (await cookieModal.isVisible()) {
    await cookieModal.locator('button:has-text("Accept")').click();
  }
 
  // Step 3: Login
  await page.getByPlaceholder('UserID').fill('a');
  await page.getByPlaceholder('Password').fill('aaaaaa');
  await page.getByRole('button', { name: /log in/i }).click();

// set path
   const folderPath = 'C:\\Users\\Subbareddy.Shyamakur\\Downloads\\copy';

  // Read all .rtq files in the folder
  const filesToUpload = fs.readdirSync(folderPath)
    .filter(file => file.endsWith('.rtq'))
    .map(file => path.join(folderPath, file));

  if (filesToUpload.length === 0) {
    throw new Error('No .rtq files found in the folder');
  }

  await page.locator("//a[normalize-space()='Import Study Data']").click();
  await page.waitForSelector("//label[normalize-space()='Choose Files']");
 //await page.locator("//label[normalize-space()='Choose Files']").click();
 const fileInput = page.locator("//label[normalize-space()='Choose Files']");

 await fileInput.setInputFiles(filesToUpload);
 await page.locator('#importButton').click();

 
await page.locator('#UserId').fill('a');
 await page.locator('#Password').fill('aaaaaa');
 await page.locator('#usercomment').fill('import study file');
 await page.click("button[type='submit']");
 
//const historyButton = page.locator('button', { hasText: 'View Import History' });
//await expect(historyButton).toBeVisible();
//await historyButton.click();
 // Open the Import History section
  await page.getByRole('button', { name: 'View Import History' }).click();
  await page.waitForSelector('text=View Import History', { state: 'attached' });

// All buttons inside the pagination container  this code work
const pageButtons = page.locator('button[role="button"][aria-label^="Page"]');

// Wait until at least one button exists
await pageButtons.first().waitFor({ state: 'visible' });

const totalPages = await pageButtons.count();
console.log(`Total pages detected: ${totalPages}`);

for (let i = 0; i < totalPages; i++) {
  const pageNumber = await pageButtons.nth(i).getAttribute('aria-label');
  console.log(`Navigating to ${pageNumber}`);
  await pageButtons.nth(i).click();

  //await page.waitForTimeout(3000);

}

});


  








