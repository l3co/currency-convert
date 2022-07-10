const Currency = require("../../main/domain/Currency");

test('create a currency with a positive value', () => {
    const currency = new Currency(1, 'USD', 'BRL', 25);
    currency.validate()
})


test('create a currency with negative value', () => {
    const currency = new Currency(1, 'USD', 'BRL', -5);
    expect(() => currency.validate()).toThrow('Invalid value, we could accept negative numbers')
})