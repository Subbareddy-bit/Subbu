import{test , expect} from '@playwright/test';

test('Hooks',async({page})=>{

await page.goto("https://www.demoblaze.com/");


///Login

await page.locator('#login2').click();
await page.locator('#loginusername').fill('pavanol');
await page.locator('#loginpassword').fill('test@123');
await page.locator("//button[normalize-space()='Log in']").click();

///HomePage
//const products = await page.$$('.hrefch');
//expect(products).toHaveLength(9);
//await page.waitForTimeout(5000);
///Logot

//await page.locator('#logout2');

/////login 


///addtocart

await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
await page.locator("//a[normalize-space()='Add to cart']").click();
page.on('dialog',async dialog =>{
    
    expect(dialog.message()).toContain('product added.')
    await page.accept();
})



})