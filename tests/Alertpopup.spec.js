import {test , expect } from "@playwright/test";
import { on } from "events";

test.skip ('Alret popup', async({page})=> {

await page.goto("https://testautomationpractice.blogspot.com/");


// Enablening alert popup 
page.on('dialog', async dialog => {

    expect(dialog.type()).toContain('alert');
    expect(dialog.message()).toContain('I am an alert box!');
    await dialog.accept();

});

await page.locator("//button[normalize-space()='Simple Alert']").first().click();





});

test.skip ('Confirm alret', async({page})=> {

await page.goto("https://testautomationpractice.blogspot.com/");


// Enablening alert popup with "OK" and "Cancel"button
page.on('dialog', async dialog => {

    expect(dialog.type()).toContain('confirm');
    expect(dialog.message()).toContain('Press a button!');
    //await dialog.accept(); /// Click on "OK"
    await dialog.dismiss();  // Click on "Cancle"

});

await page.locator("(//button[normalize-space()='Confirmation Alert'])[1]").first().click();


await page.waitForTimeout(10000);


});


test ('Confirmalretwithok' , async({page})=> {

  await page.goto ("https://testautomationpractice.blogspot.com/");


///Enable alret message with input box
page.on('dialog', async dialog => {

    expect(dialog.type()).toContain('prompt');
    expect(dialog.message()).toContain('Please enter your name:');
    expect(dialog.defaultValue()).toContain('Harry Potter');
    await dialog.accept('Jhon'); /// Click on "OK"
   // await dialog.dismiss();  // Click on "Cancle"

});

await page.locator("//button[normalize-space()='Prompt Alert']").first().click();

await expect(page.locator("//p[@id='demo'][1]")).toHaveText('Hello Jhon! How are you today?');


//await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!');


await page.waitForTimeout(10000);


});





