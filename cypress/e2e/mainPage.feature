Feature: Searching for Tours

    Scenario: Search for Tours in Belgrade on 28th July
        Given I am logged in as customer
        When I click on Tours menu item
        Then Tours page should be opened
        When I choose destination, date, travellers and click on Search button
        Then Results overview page with entered criteriums should be displayed