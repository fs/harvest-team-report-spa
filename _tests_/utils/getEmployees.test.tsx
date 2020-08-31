import { getEmployees } from '../../utils';
import { mockTeamReport, mockUsers } from '../../_mocks_/mockData';
import { expectedEmployees } from '../../_mocks_/expectedData';

describe('getEmployees', () => {
  test('Happy path', () => {
    // Arrange
    // Act
    const result = getEmployees(mockTeamReport, mockUsers);
    // Assert
    expect(result).toEqual(expectedEmployees);
  });
});
