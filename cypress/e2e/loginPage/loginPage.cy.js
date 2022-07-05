import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { loginForm } from "../../support/pom/loginPage"
import { loginPage, wrongUser } from "../../fixtures/constLoginPage"
import { author } from "../../support/pom/mainPage"
import { mainPage } from "../../fixtures/constMainPage"



Given("I am on the site login page", () => {
    cy.visit('/');

});

And("Login title and enter credentials subtitle should be displayed", () => {
    cy.get(loginForm.loginTitle).should('have.text', loginPage.loginTitle)
    cy.get(loginForm.accountCredentialsSubtitle).should('have.text', loginPage.enterCredentialsSubtitle)
});


When("I enter correct {string} and {string}", (email, password) => {
    cy.login(email, password)
});



Then("Welcome Back message should be displayed", () => {
    cy.get(author.welcomeMessage).contains(mainPage.welcomeBackMessage)
});


When("I enter wrong credentials", () => {
    cy.login(wrongUser.username, wrongUser.password)
});



Then("Wrong credentials error message should be displayed", () => {
    cy.get(loginForm.wrongCredentialsErrorMessage).contains(loginPage.wrongCredentialsMessage)
});