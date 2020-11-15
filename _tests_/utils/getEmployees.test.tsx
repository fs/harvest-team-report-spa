import { getEmployees } from 'utils';
import { mockTeamReport, mockUsers } from '_mocks_/mockData';
import { expectedEmployees } from '_mocks_/expectedData';

describe('getEmployees', () => {
  test('Happy path', () => {
    // Arrange
    // Act
    const result = getEmployees(mockTeamReport, mockUsers, { from: '2020-11-09', to: '2020-11-15' });
    // Assert
    expect(result).toEqual(expectedEmployees);
  });
});
