Feature: Funda homepage elements and page loading

  # This feature file contains smoke tests for the Funda homepage.
  # The objective is to verify that key elements, such as the logo,
  # the navigation bar, and the search bar, are displayed correctly.
  # Additionally, I check that the page loads with a 200 response to
  # confirm its availability and proper functionality.


  Scenario: Verify homepage elements
    Given I am on the Funda homepage
    Then I see the homepage loads with a status code of 200
    Then I see the logo
    Then I see the navigation bar
    Then I see the search bar
