import {divide} from "../src/divide";

test('divide should return 6 / 3 equals 2 ', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(divide(6, 3)).toBe(2);
})