const payment = {
    amount: 150
}

const paymentResult = {
    paypal: 'Pay With ' + 'paypal ' + 'USD ' + payment.amount + '.00',
    bankTransfer: 'Pay With ' + 'bank transfer ' + 'USD ' + payment.amount + '.00'
}


export { payment, paymentResult }