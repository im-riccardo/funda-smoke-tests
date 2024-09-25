import { userAgent as configUserAgent } from '../../config/browserConfig.js';
import { chromium, Page } from 'playwright';
let browser, context, page: Page;

// Launch the browser and navigate to the Funda homepage
export const initializeBrowser = async () => {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext({
    userAgent: configUserAgent,  // User agent imported from config file
    //  viewport: { width: 1920, height: 1080 }
  });
  page = await context.newPage();
  await page.goto('https://www.funda.nl');

  // Handle cookie consent
  const agreeButton = page.locator('#didomi-notice-agree-button');
  if (await agreeButton.count() > 0) {
    await agreeButton.click();
  } else {
    // eslint-disable-next-line no-console
    console.warn('Cookie consent button not found');
  }
};

export const getPage = () => page;
