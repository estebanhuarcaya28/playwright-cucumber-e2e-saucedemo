Feature: Purchase items on SauceDemo

  Scenario: Purchase an item
    Given I am on the SauceDemo login page
    When I login with valid credentials
    And I select a random item to purchase
    And I proceed to checkout
    Then I should see the confirmation message
