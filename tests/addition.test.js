"use strict";
const addition = require('../src/main.js');

test('addition de 2 et 3 doit retourner 5', () => {
    expect(addition(2, 3)).toBe(5);
});

test('addition de -1 et 1 doit retourner 0', () => {
    expect(addition(-1, 1)).toBe(0);
});

test('addition de 0 et 0 doit retourner 0', () => {
    expect(addition(0, 0)).toBe(0);
});
