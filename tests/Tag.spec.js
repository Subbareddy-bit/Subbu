import {test , expect} from '@playwright/test';
test('Tag1@sanity', async({page})=>{

    console.log('This is my test1');
});
test('Tag2@sanity', async({page})=>{

    console.log('This is my test2');
});
test('Tag3@reg', async({page})=>{

    console.log('This is my test3');
});
test('Tag4@reg', async({page})=>{

    console.log('This is my test4');
});
test('Tag5@sanity@reg', async({page})=>{

    console.log('This is my test5');
});




//// syntex npx playwright test Tag.spec.js --project=chromium --grep "@sanity"

/// i want onlt npx playwright test Tag.spec.js --project=chromium --grep "@reg" --grep-invert "@sanity"