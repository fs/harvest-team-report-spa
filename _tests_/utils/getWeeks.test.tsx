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
  test('getWeeksFromToDates should return data with week and year', () => {
    // Arrange
    const mockedWeek = '32';
    const mockedYear = '2020';
    const expectedResult = {
      from: '2020-08-03',
      to: '2020-08-09',
    };
    // Act
    const result = getWeeksFromToDates(mockedWeek, mockedYear);
    // Assert
    expect(result).toEqual(expectedResult);
  });
});
