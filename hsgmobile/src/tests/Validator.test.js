import Validators from '../utils/Validators';

test('validEmail', () => {
    expect(Validators.validEmail("a@gmail.com1")).toBe("Invalid email format");
    expect(Validators.validEmail("@gmail.com")).toBe("Invalid email format");
    expect(Validators.validEmail("abc")).toBe("Invalid email format");
    expect(Validators.validEmail("a.a,d@gmail.com")).toBe("Invalid email format");
    expect(Validators.validEmail("a@gmail.com")).toBe("");
    expect(Validators.validEmail("Tua123IJOasd@gmail.com")).toBe("");
})

test('validPassword', () => {
    expect(Validators.validPassword("a@gmail.com1")).toBe("");
    expect(Validators.validPassword("123456789")).toBe("");
    expect(Validators.validPassword("         ")).toBe("");
    expect(Validators.validPassword("        ")).toBe("Password must be longer than 8 characters");
    expect(Validators.validPassword("12345678")).toBe("Password must be longer than 8 characters");
    expect(Validators.validPassword("123")).toBe("Password must be longer than 8 characters");
})