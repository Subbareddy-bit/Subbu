import {test , expect} from '@playwright/test';
test('DragDrop',async ({page})=>{

await page.goto("https://codepen.io/EpsilonDeltaCriterion/pen/jLoPgE");

const frame = page.frameLocator('iframe.result-iframe');

// Locate source and target elements inside the iframe
  const source = frame.locator('#box6');
  const target = frame.locator('#box105');

  // Perform drag and drop
  await source.dragTo(target);

  await page.waitForTimeout(3000);
});