import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import { Navigation } from '../components/navigation/navigation.comp';

const puppeteer = require('puppeteer')



/////////////////////
// E2E Test Example


// test('sign In', async () => {
//     const browser = await puppeteer.launch({
//         headless: false,
//         slowMo: 40,
//         args: ['--window-size=1920, 1080']
//     })

//     const page = await browser.newPage();
//     await page.goto('http://localhost:3001/')
//     // await page.click('')


// }, 10000);  



test('render Navigation in App', () => {
    render(<Navigation />)

    // screen.debug();


    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();


});