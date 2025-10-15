import{test , expect} from '@playwright/test';

test('Iframe', async({page})=>{


await page.goto("https://ui.vision/demo/webtest/frames/");


    /// first find the frame

   const frame3=  await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});

   //await frame3.locator("input[name='mytext3']").fill('Subbu');

  // iframe 

  const childFrames= await frame3.childFrames();

 await childFrames[0].locator('//*[@id="i6"]/div[3]').check();
await page.waitForTimeout(5000);                                                        
});