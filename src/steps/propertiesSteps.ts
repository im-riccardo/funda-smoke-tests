import { searchSelectors } from '../components/propertiesSelectors';
import { fillInput, getLocator } from '../utils/utilis';
import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

// Step to search for properties in a specified location
When('I search for properties in {string}', async (location) => {
  const searchBox = await getLocator(searchSelectors.searchBox);
  // Click on the search box and type the location
  await searchBox.click();
  await fillInput(searchSelectors.searchBox, location);

  // Select the first suggestion from the dropdown
  const firstSuggestion = await getLocator(searchSelectors.firstSuggestion);
  await firstSuggestion.first().click();
});

// Step to click on the 'Rent' button
When('I click the rent button', async () => {
  const rentButton = await getLocator(searchSelectors.rentButton);
  // Click the button to filter results for rentals
  await rentButton.click();
});

// Step to validate the presence of the top position results
Then('I see the top position results', async () => {
  const firstTopListing = await getLocator(searchSelectors.firstTopListing);
  // Ensure that the first top listing is visible in the search results
  await expect(firstTopListing.first()).toBeVisible();
});

// Step to verify that search result items are displayed
Then('I see the search result items', async () => {
  const imageLink = await getLocator(searchSelectors.imageLink);
  const count = await imageLink.count();
  
  // Ensure there is at least one result in the list
  expect(count).toBeGreaterThan(0);

  // Loop through all result items to check their visibility
  for (let i = 0; i < count; i++) {
    const item = imageLink.nth(i);
    await expect(item).toBeVisible();
  }
});

// Step to open the detail page of the first property in the list
Then('I open a property detail page', async () => {
  const imageLink = await getLocator(searchSelectors.imageLink);
  // Click on the first property link to open its detail page
  await imageLink.first().click();
});

// Step to validate that the property page corresponds to the searched location
Then('I see the property in {string} page neighborhood', async (location) => {
  const propertyTitle = await getLocator(searchSelectors.propertyTitle(location));
  // Ensure that the property title contains the expected location
  await expect(propertyTitle).toBeVisible();
});

// Step to verify that the property details page contains general info
Then('I see the property page info', async () => {
  const propertyInfo = await getLocator(searchSelectors.propertyInfo);
  // Ensure that the property info section is visible
  await expect(propertyInfo).toBeVisible();
});

// Step to validate that the property price is displayed
Then('I see the property page price', async () => {
  const propertyPrice = await getLocator(searchSelectors.propertyPrice);
  // Ensure that the property price is visible on the page
  await expect(propertyPrice.first()).toBeVisible();
});

// Step to check that the property description is visible
Then('I see the property page description', async () => {
  const propertyDescription = await getLocator(searchSelectors.propertyDescription);
  // Ensure that the property description is present on the page
  await expect(propertyDescription).toBeVisible();
});
