import { browser } from 'k6/browser'; 
import {WEBSITE_URL, login, delay} from './helpers.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  scenarios: {
    ui: {
      executor: 'shared-iterations',
      options: {
        browser: {
          type: 'chromium',
          headless: false,
        },
      },
    },
  },
  thresholds: {
    checks: ['rate==1.0'],
  },
};


export default async function start() {
  const context = await browser.newContext({
    viewport: {width: 1920, height: 1080}  
  });
  const page = await context.newPage();

  try {
    await page.goto(WEBSITE_URL);
    await login(page);

    // click on the second menu item of the sidebar
    console.log('click on the second menu item of the sidebar');
    const menuSelector = 'ul[class="oxd-main-menu"]';
    await page.waitForSelector(menuSelector);
    await page.click(`${menuSelector} li:nth-child(2)`);

    //search employee by name
    console.log(`search employee by name`);
    await searchEmployee(page, 'amelia');
    await delay(1000);
    await searchEmployee(page, 'charles');

    handleSummary(data);

  } catch (error) {
    console.error(`Failed to open page: ${error}`);
  } finally {
    await page.close();
    await context.close();
  }
}

async function searchEmployee(page, employeeName) {
  console.log(`search employee by name: ${employeeName}`);
  const searchInputSelector = 'input[placeholder="Type for hints..."]';
  await page.waitForSelector(searchInputSelector);
  await page.fill(searchInputSelector, employeeName);

  // click on the search button for call all employees
  console.log('click on the search button for call all employees');
  const searchButtonSelector = 'button[type="submit"]';
  await page.waitForSelector(searchButtonSelector);
  await page.click(searchButtonSelector);
}

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}