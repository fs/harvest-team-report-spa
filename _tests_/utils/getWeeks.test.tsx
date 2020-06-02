import { getWeeksFromToDates } from '../../utils';

describe('getWeeksFromToDates', () => {
  test('getWeeksFromToDates should return data without week and year', () => {
    // Arrange
    const expectedResult = {
      from: '2020-06-01',
      to: '2020-06-07',
    };
    // Act
    const result = getWeeksFromToDates();
    // Assert
    expect(result).toEqual(expectedResult);
  });
});
