import{test , expect} from '@playwright/test';

test('Frame' , async({page})=> {
await page.goto("https://ui.vision/demo/webtest/frames/");

/////total frames

const Allframes = await page.frames();
console.log("No of all frames", Allframes.length );

//Approch 1 how to handle frames using name and url

//const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
//await frame1.fill("[name ='mytext1']",'Hello');




// Approch 2 How to handle frames using url

const input = await page.frameLocator("frame[src='frame_1.html']").locator("[name ='mytext1']");

input.fill('Hello');

await page.waitForTimeout(5000);
 


});