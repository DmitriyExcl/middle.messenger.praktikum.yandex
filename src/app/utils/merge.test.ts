import { mergeDeep } from './mergeDeep';

test('Глубокое слияние', () => {
  expect(mergeDeep({ a: 1 }, { b: 2 })).toStrictEqual({ a: 1, b: 2 });
});
