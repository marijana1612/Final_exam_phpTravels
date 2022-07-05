import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { signUpForm } from "../../support/pom/signupPage";
import { loginForm } from "../../support/pom/loginPage"
import { signupPage, newUser } from "../../fixtures/constSignupPage";
import { loginPage } from "../../fixtures/constLoginPage"

Given("I am on the site login page", () => {
  cy.visit('/');
});

Then("Login title and enter credentials subtitle should be displayed", () => {
  cy.get(loginForm.loginTitle).should('have.text', loginPage.loginTitle)
  cy.get(loginForm.accountCredentialsSubtitle).should('have.text', loginPage.enterCredentialsSubtitle)
});

And("Signup button should be visible", () => {
  cy.get(loginForm.signupButton).should('be.visible');
})


When("I click on Signup button", () => {
  cy.get(loginForm.signupButton).click();
});


Then("Signup title and enter credentials subtitle should be displayed", () => {
  cy.get(signUpForm.signUpTitle).should('have.text', signupPage.signUpTitle)
  cy.get(signUpForm.signUpCredentialsSubtitle).should('have.text', signupPage.signUpCredentialsSubtitle);
});

When("I fill in correct data into all input fields", () => {
  cy.signup(newUser.firstName, newUser.lastName, newUser.phone, newUser.email, newUser.password, 'agent')
})

Then("Successfull signup message should be displayed", () => {
  cy.get(signUpForm.signUpSuccessfulMessage).should('contains.text', signupPage.successfullSignupMessage);
})


When("I fill in all input fields, but email address that is already in use", () => {
  cy.signup(newUser.firstName, newUser.lastName, newUser.phone, newUser.emailUsed, newUser.password, 'customer')

})

Then("Email already exist error message should be displayed", () => {
  cy.get(signUpForm.emailExistAlert).should('contains.text', signupPage.emailExistAlert)
})