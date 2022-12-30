Feature: Multiplication

  Scenario: 1 * 0
    Given I have a 1
    When I multiply by 0
    Then In total I have 0

  Scenario: 1 * 1
    Given I have a 1
    When I multiply by 1
    Then In total I have 1
