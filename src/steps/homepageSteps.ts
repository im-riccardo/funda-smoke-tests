import { initializeBrowser } from '../utils/initializeBrowser';
import { homePageSelectors } from '../components/homePageSelectors';
import { checkVisibility } from '../utils/utilis';
import { Given, Then } from '@cucumber/cucumber';
import axios from 'axios'; // Import axios for HTTP requests

// Scenario: Navigating to the Funda homepage
Given('I am on the Funda homepage', async function () {
  await initializeBrowser();
});

// Validate that the homepage loads correctly with a status code of 200
Then('I see the homepage loads with a status code of 200', async () => {
  const response = await axios.get('https://www.funda.nl'); // Make a GET request to the homepage
  if (response.status !== 200) {
    throw new Error(`Expected status code 200 but received ${response.status}`);
  }
});

// Validate that the logo is visible on the homepage
Then('I see the logo', async () => {
  await checkVisibility(homePageSelectors.logo);
});

// Validate that the navigation bar is visible on the homepage
Then('I see the navigation bar', async () => {
  await checkVisibility(homePageSelectors.navbar);
});

// Validate that the search bar is visible on the homepage
Then('I see the search bar', async () => {
  await checkVisibility(homePageSelectors.searchBox);
});
