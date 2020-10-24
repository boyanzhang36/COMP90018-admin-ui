import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';


const puppeteer = require('puppeteer')


/////////////////////
// E2E Test Example


test('add item to Doctor', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 40,
        args: ['--window-size=1920, 1080']
    })

    const page = await browser.newPage();
    await page.goto('http://localhost:3001/')

    // sign in
    // await page.waitForSelector("input#email.input")
    // page.click('#email')
    // const selector = document.querySelector("#root > amplify-authenticator > amplify-sign-in").shadowRoot.querySelector("amplify-form-section > amplify-auth-fields").shadowRoot.querySelector("div > amplify-email-field").shadowRoot.querySelector("amplify-form-field").shadowRoot.querySelector("#email")
    // await page.evaluate((selector) => document.querySelector(selector).click(), selector); 

    //
    await page.waitForSelector("#root > div > div.app-page > main > div > table > tbody > tr")
    const tableCount = (await page.$$("#root > div > div.app-page > main > div > table > tbody > tr")).length
    console.log( tableCount );
    

    await page.click('#root > div > div.app-page > header > button')
    await page.click('#popup-portal > div > div > div.popup-content > section > form > div:nth-child(1) > input[type=text]')
    await page.type('#popup-portal > div > div > div.popup-content > section > form > div:nth-child(1) > input[type=text]', 'Doctor Fauci')

    await page.click('#popup-portal > div > div > div.popup-content > section > form > div:nth-child(3) > input[type=text]')
    await page.type('#popup-portal > div > div > div.popup-content > section > form > div:nth-child(3) > input[type=text]', 'Cobalt Beach')

    await page.click('#popup-portal > div > div > div.popup-content > section > form > div:nth-child(4) > input[type=text]')
    await page.type('#popup-portal > div > div > div.popup-content > section > form > div:nth-child(4) > input[type=text]', '555-333-2323')

    await page.click('#popup-portal > div > div > div.popup-content > section > form > div.buttons-wrapper.center') 

    // await page.waitForSelector("#root > div > div.app-page > main > div > table > tbody > tr")
    const newTableCount = (await page.$$("#root > div > div.app-page > main > div > table > tbody > tr")).length
    await console.log( newTableCount );

    await page.click('#root > div > div.app-page > main > div > table > tbody > tr:nth-child(7) > td:nth-child(10) > div > button:nth-child(2)')



}, 40000);  



test('delete item from Doctor', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 40,
        args: ['--window-size=1920, 1080']
    })

    const page = await browser.newPage();
    await page.goto('http://localhost:3001/')

    await page.waitForSelector("#root > div > div.app-page > main > div > table > tbody > tr")
    const tableCount = (await page.$$("#root > div > div.app-page > main > div > table > tbody > tr")).length
    console.log( tableCount );
    

    // await page.waitForSelector("#root > div > div.app-page > main > div > table > tbody > tr")
    const newTableCount = (await page.$$("#root > div > div.app-page > main > div > table > tbody > tr")).length
    await console.log( newTableCount );

    page.on('dialog', async dialog => {
        console.log("click accept in dialog")
        dialog.accept();
    })

    await page.click('#root > div > div.app-page > main > div > table > tbody > tr:nth-child(7) > td:nth-child(10) > div > button:nth-child(2)')
    


}, 40000);  