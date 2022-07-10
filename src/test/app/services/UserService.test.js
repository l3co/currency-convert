const { UserService } = require('../../../main/app/services')

test('create a new user', async () => {
    const result = await UserService.create({
        "name": "test",
        "email": `test${Math.random()}@mail.com`
    })

    expect(result).not.toBeNull()
    expect(result.id).not.toBeNull()
});

test('create a new user without email', async () => {
    await expect(UserService.create({ "name": "test" })).rejects.toThrow()
});

test('create a user with email registred', async () => {
    const user = {
        "name": "test",
        "email": `test${Math.random()}@mail.com`
    }

    const result = await UserService.create(user)
    expect(result).not.toBeNull()
    expect(result.id).not.toBeNull()

    await expect(UserService.create(user)).rejects.toThrow()
});