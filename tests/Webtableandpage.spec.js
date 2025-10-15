import{test,expect} from '@playwright/test';
//import { table, table } from 'console';
test('webtable', async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")


//write the table id xpath

const table = await page.locator('#productTable');

// first count the coloums of table
const coloums = await table.locator('thead tr th');
console.log('coloumscount:', await coloums.count());
await expect (await coloums.count()).toBe(4);

// Second count the rows

const rows= await table.locator('tbody tr');
console.log('rowscount:',await rows.count());
expect(await rows.count()).toBe(5);


///// Using this method for particular product select
/*const matchedrows= rows.filter({
has:page.locator('td'),
hasText:'Smartwatch'
})
matchedrows.locator('input').check(); */

///// if want select multiple check boxes using another method (using function method )

    await selectmutlipleproducts(rows,page,'Laptop')
    await selectmutlipleproducts(rows,page,'Tablet')


    ///// Select all page navigations





await page.waitForTimeout(5000);

});
//// if want select multiple check boxes using another method (using function method )  first write below code and after then above code

async function selectmutlipleproducts (rows,page,name){

const matchedrows= rows.filter({
has:page.locator('td'),
hasText: name
})
await matchedrows.locator('input').check();

}



