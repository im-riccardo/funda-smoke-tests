# Funda Test Automation

## Overview

This project automates five smoke tests comprising eight scenarios on the Funda website, focusing on critical functionalities. Smoke tests serve as preliminary checks to ensure that essential features of the application are operating correctly, providing quick feedback on system stability before more extensive testing begins.

The tests evaluate key components, including the homepage, property search features, property detail pages, agent contact functionality, and user login. Designed to target minimal but essential parts of the application, each test is quick and efficient. Given the maximum limit of 200 tests, it is feasible to cover the entire application effectively with tests of this nature, ensuring comprehensive validation without significantly increasing execution time.

To streamline future development, I have organized features, functions, and selectors for components into specific folders based on IDs for easier management, enhancing scalability and maintainability as the project evolves.

This project leverages Cucumber for behavior-driven development (BDD) and Playwright for browser automation.

## Prerequisites

Before running the tests, ensure you have [Node.js](https://nodejs.org/) installed on your machine.

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies using `npm install`.
4. Install Playwright running `npx playwright install`.

## Configuration

### Configuration Files

### Step 1: Set Up the Configuration Directory

**Update Configuration Files**  
In the `config` directory, you'll find two example files:

- `browserConfig.example.js`
- `loginConfig.example.js`

To update these files:

1. Rename `browserConfig.example.js` to `browserConfig.js`.
2. Rename `loginConfig.example.js` to `loginConfig.js`.

- **browserConfig.js**:  
  This file contains the following configuration:

```javascript
export const userAgent = 'your-user-agent';
```

Update 'your-user-agent' with the appropriate user agent string for your test environment.

- **loginConfig.js**:  
  This file contains the login credentials:

```javascript
export const email = 'your-email-address';
export const password = 'your-password';
```

Replace 'your-email-address' and 'your-password' with your actual login credentials.

Both files are listed in .gitignore to ensure sensitive information is not committed to the repository.

## Project Structure

```javascript
funda-smoke-tests/
├── config/
│ ├── browserConfig.js                              // Browser configurations (user agent)
│ └── loginConfig.js                                // Funda account login credentials for login tests
├── features/
│ ├── A.authentication/
│     └── A.1 login.feature /                       // Test scenarios for the login process
│ ├── B.homepage/
│     └── B.1 homepage_ui.feature                   // Test scenarios for the homepage ui
│ ├── C.listings/
│     ├── C.1.agent/
│          └── C.1.1 agent_contact.feature          // Test scenarios for the agent contact form
│     ├── C.2.property_page/
│          └── C.2.1 property_details.feature       // Test scenarios for the property page details
│     └── C.3.search/
│          └── C.3.1. properties_search.feature     // Test scenarios for the properties search
├── src/
│ ├── components/
│ │ ├── contactSelectors.ts                         // Selectors for elements in the contact form
│ │ ├── homepageSelectors.ts                        // Selectors for elements on the homepage
│ │ ├── loginSelectors.ts                           // Selectors for elements on the login page
│ │ └── propertiesSelectors.ts                      // Selectors for elements on the search page
│ ├── steps/
│ │ ├── contactSteps.ts                             // Step definitions for contact form tests
│ │ ├── homepageSteps.ts                            // Step definitions for homepage tests
│ │ ├── loginSteps.ts                               // Step definitions for login tests
│ │ └── propertiesSteps.ts                          // Step definitions for search tests
│ └── utils/
│   ├── initializeBrowser.ts                        // Initializes the browser for testing
│   └── utils.ts                                    // Utility functions for interacting with web elements
├── reports/
│ ├── cucumber-report.json                          // JSON test report
│ └── report.html                                   // HTML test report
└── package.json                                    // Node.js project metadata and dependencies
```

## Running Tests

### Execute All Tests

To run all tests, navigate to the root of the project and execute `npm run test`.

### Execute a Specific Test

To run a specific test file, use `npm run test features/homepage_tests.feature`, replacing the path with your desired feature file.

## Viewing Reports

After running tests, view the results by opening `report.html` located in the `reports` directory. This report provides a detailed overview of the test outcomes.

## Notes

During npm install, you may see warnings about deprecated dependencies related to Cucumber. These do not affect the core functionality of the project, which focuses on automating Funda. I chose not to resolve these warnings as they are not central to the project.
