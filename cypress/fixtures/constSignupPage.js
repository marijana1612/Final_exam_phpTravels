import { faker } from '@faker-js/faker';

const signupPage = {
    signUpTitle: 'Signup',
    signUpCredentialsSubtitle: 'Please enter all credentials to signup',
    successfullSignupMessage: 'Signup successfull please login.',
    emailExistAlert: 'Email already exist!'
}

const newUser = {
    firstName: 'Customer',
    lastName: 'Novic',
    phone: '0012233',
    email: faker.internet.email(),
    password: 'somePass1231!',
    emailUsed: 'user@phptravels.com'
}

const newCustomer1 = {
    firstName: 'Maki',
    lastName: 'Novic',
    phone: '0012299',
    email: 'maki@phptravels.com',
    password: 'demouser01',
}

export { signupPage, newUser, newCustomer1 }