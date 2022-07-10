const Currency = require("../../../main/domain/Currency");
const ExchangeApi = require("../../../main/infra/gateway/ExchangeApi");

test('pass a currency type by param', async () => {
    const exchageApi = new ExchangeApi()
    const currency = new Currency(1, 'BRL', 'USD', 10);
    const result = await exchageApi.convert(currency)
    expect(result).not.toBeNull()
})

test('pass a literal object invalid', async () => {
    const exchageApi = new ExchangeApi()
    const any = { b: 1, c: 2 }
    await expect(() => exchageApi.convert(any)).rejects.toThrow(Error);
})