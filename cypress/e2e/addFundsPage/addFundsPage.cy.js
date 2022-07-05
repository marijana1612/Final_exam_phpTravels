import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import { customer } from "../../fixtures/constLoginPage"
import { paymentResultMessage } from "../../support/pom/addFunds"
import { payment, paymentResult } from "../../fixtures/constAddFunds"
import { sideNav } from "../../support/pom/sideNav"
import { addFunds } from "../../support/pom/addFunds"


Given("I am logged in as customer", () => {
    cy.visit('/');
    cy.login(customer.username, customer.password);
})
When("I click on Add Funds sidebar menu item", () => {
    cy.get(sideNav.addFunds).click();
})
Then("Add Funds title and Payment methods subtitle should be displayed", () => {
    cy.get(addFunds.addFundsTitle).should('be.visible');
    cy.get(addFunds.paymentMethodTitle).should('be.visible');
})


When("I select paypal, fill in amount and click on Pay Now button", () => {
    cy.newPayment(payment.amount, 'paypal');

})
Then("Paypal payment overview page with entered amount should be displayed", () => {
    cy.get(paymentResultMessage.paypal).should('have.text', paymentResult.paypal);

})


When("I select Bank Transfer, fill in amount and click on Pay Now button", () => {
    cy.newPayment(payment.amount, 'bankTransfer');
}
)
Then("Bank Transfer payment overview page with entered amount should be displayed", () => {
    cy.get(paymentResultMessage.bankTransfer).should('have.text', paymentResult.bankTransfer);
}
)


