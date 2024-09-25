Feature: Funda property search - buy and rent

  # This feature file covers smoke tests related to the property search functionality,
  # ensuring that users can search for properties and view relevant search results.
  # It covers both the Buy and Rent search categories

  Scenario: Search for properties - Buy
    Given I am on the Funda homepage
    When I search for properties in "<location>"
    Then I see the top position results
    Then I see the search result items

    Examples:
      | location  |
      | Amsterdam |
      | Haarlem   |
      | Rotterdam |

  Scenario: Search for properties - Rent
    Given I am on the Funda homepage
    When I click the rent button
    When I search for properties in "<location>"
    Then I see the top position results
    Then I see the search result items

    Examples:
      | location  |
      | Amsterdam |