import { customer } from "../../fixtures/constLoginPage"
import { menuItems } from "../../support/pom/mainPage"
import { toursPage, toursResultPage } from "../../support/pom/toursPage";
import { destination, tours, toursResult } from "../../fixtures/constToursPage"

Given("I am logged in as customer", () => {

    cy.visit('/');
    cy.login(customer.username, customer.password);
});


When("I click on Tours menu item", () => {
    cy.get(menuItems.toursMenuItem).click();
});

Then("Tours page should be opened", () => {
    cy.get(toursPage.title).should('have.text', tours.title)
});

When("I choose destination, date, travellers and click on Search button", () => {
    cy.get(toursPage.destinationDropDown).type(destination);
    cy.get(toursPage.searchResult).click();
    cy.get(toursPage.dateInputField).click();
    cy.get(toursPage.selectedDate).click();
    cy.get(toursPage.searchButton).click();
});

Then("Results overview page with entered criteriums should be displayed", () => {
    cy.get(toursResultPage.resultTitle).should('have.text', toursResult.title);
    cy.get(toursResultPage.searchedDate).should('have.text', toursResult.date);
    cy.get(toursResultPage.searchedTravellers).should('have.text', toursResult.travellers);
})