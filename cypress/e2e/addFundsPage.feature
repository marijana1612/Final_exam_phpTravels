Feature: Add funds by using different payment methods

    Background: I am logged in as customer and navigated to Add Funds Page
        Given I am logged in as customer
        When I click on Add Funds sidebar menu item
        Then Add Funds title and Payment methods subtitle should be displayed

    Scenario: Using of Paypal for adding funds
        When I select paypal, fill in amount and click on Pay Now button
        Then Paypal payment overview page with entered amount should be displayed

    Scenario: Using of Bank transfer for adding funds
        When I select Bank Transfer, fill in amount and click on Pay Now button
        Then Bank Transfer payment overview page with entered amount should be displayed

