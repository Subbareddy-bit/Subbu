import{test, expect}from '@playwright/test';

test('datepiker', async({page})=>{


await page.goto("https://demo.automationtesting.in/Datepicker.html");

//Datepicker dirct from datetable

//await page.locator("#datepicker2").fill('10/13/2025');


// send way to find the next year date




await page.click("#datepicker2");

// Step 2: Wait for the calendar dropdown to appear
  await expect(page.locator('.datepick-month')).toBeVisible();

  // Step 3: Select Month and Year
 // Select month
await page.locator('select[title="Change the month"]').selectOption('October');

// Select year
await page.locator('select[title="Change the year"]').selectOption('2025');


  // Step 4: Pick a specific date
  await page.locator("//a[text()='15']").click();

  // Step 5: Verify the date was selected
 /* const selectedDate = await dateInput.inputValue();
  console.log('Selected Date:', selectedDate);
  expect(selectedDate).toContain('04/15/2025');*/

  await page.waitForTimeout(5000);
});






