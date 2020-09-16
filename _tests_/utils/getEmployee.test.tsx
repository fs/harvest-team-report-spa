import { getEmployee } from 'utils';
import { mockUserTimeEntries, mockUser } from '_mocks_/mockData';
import { expectedEmployee } from '_mocks_/expectedData';

describe('getEmployee', () => {
  test('Happy path', () => {
    // Arrange
    const expectedWeek = 35;
    const expectedYear = 2020;
    // Act
    const result = getEmployee(mockUserTimeEntries, mockUser, expectedWeek, expectedYear);
    // Assert
    expect(result).toEqual(expectedEmployee);
  });
});
