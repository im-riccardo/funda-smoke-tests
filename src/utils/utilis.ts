import { getPage } from './initializeBrowser';
import { Locator } from '@playwright/test';

// Function to retrieve a Playwright locator for a given selector
export const getLocator = async (selector: string): Promise<Locator> => {
  const page = getPage();
  return page.locator(selector);
};

// Utility function to fill input fields
export const fillInput = async (selector: string, value: string): Promise<void> => {
  const locator = await getLocator(selector);
  await locator.fill(value);
};

// Utility function to select option from a dropdown
export const selectDropdown = async (selector: string, value: string): Promise<void> => {
  const page = getPage();
  await page.selectOption(selector, value);
};

// Utility function to check if an element is visible
export const checkVisibility = async (selector: string, timeout: number = 2000): Promise<void> => {
  const locator = await getLocator(selector);
  await locator.waitFor({ state: 'visible', timeout });
};
