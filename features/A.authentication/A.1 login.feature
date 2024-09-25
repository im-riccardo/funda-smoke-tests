Feature: Funda Login

  # This feature file includes smoke tests for the login functionality.
  # The purpose of this test is to verify that users can successfully
  # log in to their accounts and access their account pages (happy path).

  # Note:
  # Additional login scenarios such as:
  # - Login with an incorrect password
  # - Login with an incorrect email address
  # - Login with a missing password
  # - Login with a missing email address
  # - Login with an invalid email format
  #
  # These cases are better addressed through more comprehensive testing, such as regression tests,
  # which are designed to thoroughly evaluate the system's behavior under various input conditions.

  Scenario: Successful login to account
    Given I am on the Funda homepage
    When I click the login button in the navigation bar
    And I fill in my account e-mail address
    And I fill in my account password
    And I click the login submit button
    Then I reach my account page
