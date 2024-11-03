// constants 
export const WEBSITE_URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

// functions
export async function login(page) {
  console.log('Logging in...');
  await page.waitForSelector('[name="username"]');
  await page.fill('[name="username"]', 'Admin');
  await page.fill('[name="password"]', 'admin123');
  await page.click('[type="Submit"]');
  await page.waitForNavigation();
}

export function delay(milliseconds = 1000) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}