Feature: Login Functionality

Background: 
Given User navigates to the login page

  Scenario Outline: Login with Valid Credentials
    Given User enters valid Username <username> in text field
    And User enters valid password in text field
    And User clicks on login button
    Then User should be taken to the invetory page

    Examples:
    |username|
    |standard_user|
    |locked_out_user|
    |problem_user|
    |performance_glitch_user|
    |error_user|
    |visual_user|

    Scenario: Login with Invalid Credentials
      Given User enter invalid username
      And User type in valid password
      And User clicks on login button
      Then User should see an error message indicating invalid credentials