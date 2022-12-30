Feature: Addition
  Scenario: 1 + 0
    Given I have a 1
    When I add 0
    Then In total I have 1

  Scenario: 1 + 1
    Given I have a 1
    When I add 1
    Then In total I have 2