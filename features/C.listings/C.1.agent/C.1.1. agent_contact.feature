Feature: Funda agent contact form

  # This feature file focuses on testing the contact form functionality
  # within property detail pages. The aim is to ensure that users can
  # successfully submit inquiries to agents about properties.

  Scenario: Submit contact form for a property
    Given I am on the Funda homepage
    When I search for properties in "<location>"
    Then I open a property detail page
    Then I click the button to contact the agent
    Then I fill in the "<comment>" comment to the agent
    Then I fill in my "<e-mail>" e-mail address
    Then I select my "<salutation>" salutation
    Then I fill in my "<firstname>" first name
    Then I fill in my "<surname>" surname
    Then I fill in my "<phone>" phone number

    # The following step is intentionally commented out to avoid sending real requests
    # to agents during tests running in the production environment. Executing
    # this could result in unintended consequences, such as spamming agents or
    # generating unauthorized inquiries.

    # Then I click the contact agent submit button

    Examples:
      | location  | comment                               | e-mail        | salutation | firstname | surname      | phone      |
      | Amsterdam | I would like to have more information | test@test.com | Dhr        | Test Name | Test Surname | 0200000000 |
