import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { myBookingsPage } from "../../support/pom/myBookings";
import { sideNav } from "../../support/pom/sideNav"
import { myBookings } from "../../fixtures/constMyBookings"
import { newCustomer1 } from "../../fixtures/constSignupPage"
import { loginForm } from "../../support/pom/loginPage"
import { signUpForm } from "../../support/pom/signupPage"
import { customer1 } from "../../fixtures/constLoginPage"


Given("I am registered and logged in as customer", () => {
  cy.visit('/');
  cy.get(loginForm.signupButton).click();
  cy.signup(newCustomer1.firstName, newCustomer1.lastName, newCustomer1.phone, newCustomer1.email, newCustomer1.password, 'customer');
  cy.get('body').then($body => {
    if ($body.find(signUpForm.emailExistAlert).length > 0) {
      cy.get(loginForm.loginButton1).click();
      cy.login(customer1.username, customer1.password);
    } else {
      cy.login(customer1.username, customer1.password);
    }
  })
});


When("I click on My Bookings sidebar menu item", () => {
  cy.get(sideNav.myBookings).click();
});

Then("My Bookings title should be displayed", () => {
  cy.get(myBookingsPage.myBookingsTitle).should('have.text', myBookings.title)
})

And("info text No Results Found should be displayed", () => {
  cy.get(myBookingsPage.contentMessage).should('contains.text', myBookings.contentMessage)
});
