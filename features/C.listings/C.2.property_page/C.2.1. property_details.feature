Feature: Funda property page details

  # This feature file covers smoke tests related to the validation of property detail pages.
  # Validating the fundamental components of the property detail page, ensuring
  # that the functionality is working correctly and providing users with the necessary
  # information about properties of interest.

  Scenario Outline: View property details
    Given I am on the Funda homepage
    When I search for properties in "<location>"
    Then I open a property detail page
    Then I see the property in "<location>" page neighborhood
    Then I see the property page info
    Then I see the property page price
    Then I see the property page description

    Examples:
      | location  |
      | Amsterdam |
