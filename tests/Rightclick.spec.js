import{test, expect} from '@playwright/test';
test('Rightckick',async({page})=>
{
    await page.goto("" );

    const button= await page.locator('here we can pass locatore')

    // write right click method

    await button.click({button:'right'});

    // if we want left 

    await button.click({button:'left'});

    // if we want middle

    await button.click({button:'middle'});






});