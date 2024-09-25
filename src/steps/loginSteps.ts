import { loginSelectors } from '../components/loginSelectors';
import { email as configEmail, password as configPassword } from '../../config/loginConfig';
import { fillInput, getLocator, checkVisibility } from '../utils/utilis';
import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

// Click the login button in the navigation bar
When('I click the login button in the navigation bar', async () => {
  const loginButton = await getLocator(loginSelectors.loginButton);
  await loginButton.click();
});

// Fill in the user's e-mail address in the login form
Then('I fill in my account e-mail address', { timeout: 10000 }, async () => {
  await checkVisibility(loginSelectors.emailInput);
  await fillInput(loginSelectors.emailInput, configEmail);
});

// Fill in the user's password in the login form
Then('I fill in my account password', { timeout: 10000 }, async () => {
  await checkVisibility(loginSelectors.passwordInput);
  await fillInput(loginSelectors.passwordInput, configPassword);
});

// Submit the login form
Then('I click the login submit button', async () => {
  const submitButton = await getLocator(loginSelectors.submitButton);
  await submitButton.click();
});

// Validate that the user has successfully reached the account page
Then('I reach my account page', async () => {
  const accountButton = await getLocator(loginSelectors.accountButton);
  await expect(accountButton.first()).toBeVisible();
});
