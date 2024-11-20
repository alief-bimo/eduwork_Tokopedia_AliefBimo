Feature: Search on Tokopedia

    as a user i want to find the item that i want on tokopedia using
    the search functionality

    Scenario: using keyword "fiio" on the search form
        Given I already on Tokopedia homepage
        When I enter the keyword "fiio" on the search bar
        Then I should see the search result that contains the word "fiio"