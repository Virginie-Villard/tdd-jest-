import {multiply} from "../src/multiply";

test('should return 1 * 2 = 2', () => {
    const a = 3;
    const b = 4;
    expect(typeof a).toBe("number");
    expect(typeof b).toBe("number");
    expect(typeof multiply(3, 4)).toBe("number");
    expect(multiply(2, 2)).toBe(4);
    expect(multiply(1, 2)).toBe(2);
});