const addFunds = {
    addFundsTitle: '.d-block > .title',
    paymentMethodTitle: '.form-title-wrap > .title',
    payPalRadioButton: '#gateway_paypal',
    bankTransferRadioButton: '#gateway_bank-transfer',
    amountInputField: '[name="price"]',
    payNowButton: '[type="submit"]'
}

const paymentResultMessage = {
    paypal: '.card-header > :nth-child(1)',
    bankTransfer: '.card-header > :nth-child(1)'
}

export { addFunds, paymentResultMessage }