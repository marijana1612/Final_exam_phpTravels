import { loginForm } from '../support/pom/loginPage'
import { signUpForm } from '../support/pom/signupPage'
import { addFunds } from '../support/pom/addFunds'
import { sideNav } from '../support/pom/sideNav'

//const amount = faker.random.numeric(4, {allowLeadingZeros: false})

Cypress.Commands.add('login', (email, password) => {
    cy.get(loginForm.emailInputField).clear().type(email);
    cy.get(loginForm.passwordInputField).clear().type(password);
    cy.get(loginForm.loginButton).click();
});


Cypress.Commands.add('signup', (firstName, lastName, phone, email, password, accountType) => {
    cy.get(signUpForm.firstNameInputField).clear().type(firstName);
    cy.get(signUpForm.lastNameInputField).clear().type(lastName);
    cy.get(signUpForm.phoneInputField).clear().type(phone)
    cy.get(loginForm.emailInputField).clear().type(email);
    cy.get(loginForm.passwordInputField).type(password);
    cy.get(signUpForm.accountTypeDropDown).click();
    if (accountType === 'customer') {
        cy.get(signUpForm.accountTypeOptions).children().contains('Customer').click();
    } else if (accountType === 'supplier') {
        cy.get(signUpForm.accountTypeOptions).children().contains('Supplier').click();
    } else if (accountType === 'agent') {
        cy.get(signUpForm.accountTypeOptions).children().contains('Agent').click();
    }
    cy.get(signUpForm.signUpButton).click();

})

Cypress.Commands.add('logout', () => {
    cy.get(sideNav.logoutButton).click();
});

Cypress.Commands.add('newPayment', (amount, type) => {
    if (type === 'paypal') {
        cy.get(addFunds.payPalRadioButton).click();
    } else if (type === 'bankTransfer') {
        cy.get(addFunds.bankTransferRadioButton).click();
    }
    cy.get(addFunds.amountInputField).clear().type(amount);
    cy.get(addFunds.payNowButton).click();
})