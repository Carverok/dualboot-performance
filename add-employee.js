import { browser } from 'k6/browser';
import {WEBSITE_URL, login, delay} from './helpers.js';

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
    
    // Go to add employee form
    const addEmployeURL = 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee';
    await page.goto(addEmployeURL);

    //fill form with employee data
    await fillEmployee(page);

    // Wait for 3 seconds
    await delay(3000);



  } catch (error) {
    console.error(`Failed to open page: ${error}`);
  } finally {
    await page.close();
    await context.close();
  }

  async function fillEmployee(page) {
    //first name 
    const firstName = 'Jhon';
    const firstNameSelector = 'input[class="oxd-input oxd-input--active orangehrm-firstname"]';
    await page.fill(firstNameSelector, firstName);

    //second name
    const middleName = 'Connor';
    const middleNameSelector = 'input[class="oxd-input oxd-input--active orangehrm-middlename"]';
    await page.fill(middleNameSelector, middleName);

    //last name
    const lastName = 'Doe';
    const lastNameSelector = 'input[class="oxd-input oxd-input--active orangehrm-lastname"]';
    await page.fill(lastNameSelector, lastName);

    //click save button
    const saveButtonSelector = 'button[type="submit"]';
    await page.waitForSelector(saveButtonSelector);
    await page.click(saveButtonSelector);
    await page.waitForNavigation();
  };
}