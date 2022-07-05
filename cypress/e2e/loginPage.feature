Feature: Login into application with correct/wrong credentials

    Background: Navigate to login page
        Given I am on the site login page
        And Login title and enter credentials subtitle should be displayed

    Scenario Outline: Login with correct credentials should navigate to main page
        When I enter correct '<email>' and '<password>'
        Then Welcome Back message should be displayed

        Examples:
            | email                | password  |
            | user@phptravels.com  | demouser  |
            | agent@phptravels.com | demoagent |


    Scenario: Login with wrong credentials should result with error message
        When I enter wrong credentials
        Then Wrong credentials error message should be displayed
