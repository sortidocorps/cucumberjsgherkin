Feature: Multiplication

  Scenario: Get postal code detail
    Given I have this postal code 63000
    When I whant some information about the postal code
    Then The response body should be
      | codePostal | codeCommune | nomCommune       | libelleAcheminement |
      |      63000 |       63113 | Clermont-Ferrand | CLERMONT FERRAND    |
