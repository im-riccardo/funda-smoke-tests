// Object containing CSS selectors for elements related to the property search functionality.
export const searchSelectors = {
  // Selector for the search box input field
  searchBox:            'input[data-testid="search-box"]',

  // Selector for the first location suggestion in the dropdown
  firstSuggestion:      'li[data-testid="SearchBox-location-suggestion"]',

  // Selector for the first top listing in the search results
  firstTopListing:      'div[data-testid="top-position-listing"]',

  // Selector for the image link of a property in the search results
  imageLink:            'div[data-test-id="search-result-item"] a[data-test-id="object-image-link"]',

  // Selector for the property title, dynamically based on location
  propertyTitle:        (location: string) => `div[city="${location}"]`,

  // Selector for property information that contains the text "wonen"
  propertyInfo:         'ul:has(li:has-text("wonen"))',

  // Selector for the property price, specifically looking for prices with "€" and "kk"
  propertyPrice:        ':has-text("€"):has-text("kk")',

  // Selector for the property description panel
  propertyDescription:  '#headlessui-disclosure-panel-v-0-0-1',

  // Selector for the rent button
  rentButton:           'button[data-text="Huur"]',
};
