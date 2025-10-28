import{test , expect}from '@playwright/test';

/*test('Grouping section', async({page})=>{

console.log('this is the test1');

})
test('Grouping section1', async({page})=>{

console.log('this is the test2');

})*/

test.describe.skip ('Group2', ()=>{

test('Grouping section', async({page})=>{

console.log('this is the test1');

})
test('Grouping section1', async({page})=>{

console.log('this is the test2');

})

})

test.describe('Group3',()=>{

test('Grouping section', async({page})=>{

console.log('this is the test3');

})
test('Grouping section1', async({page})=>{

console.log('this is the test4');

})



})
