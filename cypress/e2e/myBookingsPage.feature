Feature: Checking if there are existing bookings on My Bookings page

    Scenario: Under My Bookings page no results should be found

        Given I am registered and logged in as customer
        When I click on My Bookings sidebar menu item
        Then My Bookings title should be displayed
        And info text No Results Found should be displayed