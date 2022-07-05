Feature: Signing up new user and trying to sign in with the existing one

    Background: Navigate to signup page
        Given I am on the site login page
        Then Login title and enter credentials subtitle should be displayed
        And Signup button should be visible
        When I click on Signup button
        Then Signup title and enter credentials subtitle should be displayed

    Scenario: Signup a new user
        When I fill in correct data into all input fields
        Then Successfull signup message should be displayed


    Scenario: Signup the user with email address that is already in use
        When I fill in all input fields, but email address that is already in use
        Then Email already exist error message should be displayed

