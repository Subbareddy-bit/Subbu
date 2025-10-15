import { test , expect } from '@playwright/test';
test ('KeywordAction', async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

/// frist fill the data in textbox

await page.type ('#name','Subbu');

////keyword actions

/// Ctrl A for select  content
await page.keyboard.press('Control+A');

///ctrl C for copy content
await page.keyboard.press('Control+C');

/// Tab for move
await page.keyboard.down('Tab');
//await page.keyboard.up('Tab');
////ctrl v for paste content
await page.keyboard.press('Control+V');

await page.waitForTimeout(5000);

});
